<template>
    <scroll
        @scroll='scroll'
        :listen-scroll="listenScroll"
        :probe-type="probeType"
        :data="data"
        class="listview"
        ref="listview"
    >
        <ul>
            <li v-for="group in data" class="list-group" ref="listGroup">
                <h2 class="list-group-title">{{group.title}}</h2>
                <uL>
                    <li @click="selectItem(item)" v-for="item in group.items" class="list-group-item">
                        <img class="avatar" v-lazy="item.avatar">
                        <span class="name">{{item.name}}</span>
                    </li>
                </uL>
            </li>
        </ul>
        <div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove"
         @touchend.stop> 
            <ul>
                <li v-for="(item, index) in shortcutList" :data-index="index" class="item"
                    :class="{'current':currentIndex===index}">{{item}}
                </li>
            </ul>
        </div>
        <div v-show="!data.length" class="loading-container">
            <loading></loading>
        </div>
    </scroll>
</template>
<script>
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import {getData} from '@/common/js/dom'

const TITLE_HEIGHT = 30
const ANCHOR_HEIGHT = 18

export default {
    data(){
        return{
            listenScroll: true,
            probeType: 3,
            currentIndex: 0,
            listHeight: []
        }
    },
    props: {
        data: {
            type: Array,
            default:[]
        }
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
      this.touch = {}
      this.listHeight = []
     
    },
    methods: {
        selectItem(item){
            this.$emit('select', item)
        },
        scroll(pox){

        },
        onShortcutTouchStart(e){
            let anchorIndex = getData(e.target, 'index') //得到的是字符串
            let firstTouch = e.touches[0]
            this.touch.y1 = firstTouch.pageY
            this.touch.anchorIndex = anchorIndex
            this._scrollTo(anchorIndex)   
        },
        onShortcutTouchMove(e){
            let firstTouch = e.touches[0]
            this.touch.y2 = firstTouch.pageY
            let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
            let currentIndex = parseInt(this.touch.anchorIndex) + delta //相加要转变为数字
            this.currentIndex = currentIndex
            console.log(currentIndex)
            this._scrollTo(currentIndex)
        },
        _calculateHeight(){
            let listHeight = []
            const list = this.$refs.listGroup
            let height = 0
            for(let i = 0; i <list.length; i++){
                let val = list[i]
                height += val.clientHeight
                listHeight.push(height) //clientHeight：元素客户区的大小，指的是元素内容及其边框所占据的空间大小（经过实践取出来的大多是视口大小）
            }
             console.log(listHeight)
             this.listHeight = listHeight
        },
        _scrollTo(index){
            if(index < 0){
                this.currentIndex = 0
                index = 0
            }
            if(index > this.listHeight.length){
                this.currentIndex = this.listHeight.length - 1
                index =  this.listHeight.length - 2
            }
            this.scrollY = -this.listHeight[index]
            this.$refs.listview.scrollToElement(this.$refs.listGroup[index],0)
        }
    },
    computed: {
        shortcutList(){
            return this.data.map(item => {
                return item.title.substr(0,1)
            })
        }
    },
    mounted(){

    },
    watch: {
      data() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      }
    },
    components:{
        Scroll,
        Loading
    }
}
</script>
<style lang="stylus">
 @import "~common/stylus/variable"
.listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
        position: absolute
        right: 0px
        z-index: 20
        top: 50%
        transform: translateY(-50%)
        width: 20px
        padding: 20px 0
        border-radius: 10px
        text-align: center
        background: rgba(0,0,0,.3)
        font-family: Helvetica
        .item
            padding: 3px;
            line-height: 1;
            color: hsla(0,0%,100%,.5);
            font-size: 12px;
            &.current
                color: $color-theme

</style>


