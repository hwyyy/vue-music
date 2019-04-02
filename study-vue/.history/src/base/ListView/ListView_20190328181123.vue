<template>
    <div>
        <Scroll
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
            <div class="list-shortcut"></div>
        </Scroll>
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
    components:{
        Scroll,
        Loading
    }
}
</script>
<style lang="stylus">
 @import "~common/stylus/variable"
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
</style>


