<template>
    <div>
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
            <!-- <div class="list-shortcut">
                <ul>
                    <li v-for="(item,index) in shortcutList"></li>
                </ul>
            </div> -->
        </scroll>
        <Loading v-if="data.length == 0"></Loading>
    </div>
</template>
<script>
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import {getData} from '@/common/js/dom'

export default {
    data(){
        return{
            listenScroll: true,
            probeType: 3
        }
    },
    props: {
        data: {
            type: Array,
            default:[]
        }
    },
    methods: {
        selectItem(item){
            this.$emit('select', item)
        },
        scroll(pox){

        }
    },
    mounted(){

    },
    computed:{
        shortcutList() {
            return this.data.map((group) => {
            return group.title.substr(0, 1)
            })
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
        right: 0
        z-index: 30
        top: 50%
        width: 20px
        padding: 20px 0
        border-radius: 10px
        text-align: center
        background: $color-background-d
        font-family: Helvetica
</style>


