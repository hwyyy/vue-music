<template>
    <div class="music-list">
        <div class="back" @click="back">
            <i class="icon-back"></i>
        </div>
        <h1 class="title">{{title}}</h1>
        <div class="bg-image" :style="bgStyle" ref="bgImage">
            <div class="play-wrapper">
                <div ref="playBtn" v-show="songs.length>0" class="play" @click="random">
                    <i class="icon-play"></i>
                    <span class="text">随机播放全部</span>
                </div>
            </div>
            <!-- 蒙层 -->
            <div class="filter" ref="filter"></div> 
        </div>
        <!-- <div class="bg-layer" ref="layer">胜多负少的</div> -->
        <Scroll :data='songs' @scroll="scroll" @listen-scroll='listenScroll' :probe-type='probeType' class="list" ref="list">
            <ul>
                <li @click="selectItem(song, index)" class="item" v-for="(song, index) in songs">
                    <!-- <div class="rank" v-show="rank">
                        <span :class="getRankCls(index)" v-text="getRankText(index)"></span>
                    </div> -->
                    <div class="content">
                    <h2 class="name">{{song.name}}</h2>
                    <p class="desc">{{song.singer}}·{{song.album}}</p>
                    </div>
                </li>
            </ul>
        </Scroll>
    </div>
</template>
<script>
import Scroll from '@/base/scroll/scroll'

export default {
    props:{
        songs: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default:''
        },
        bgImage:{
            type: String,
            default: ''
        }
    },
    data(){
        return{
            scrollY: -1,
            listenScroll: true,
            probeType: 3
        }
    },
    created(){
        
    },
    computed:{
        bgStyle(){
            return `background-image: url(${this.bgImage})`
        }
    },
    methods:{
        back() {
            this.$router.back()
        },
        scroll(pos) {
            this.scrollY = pos.y
        },
        random(){

        },
        selectItem(item){

        }
    },
    components: {
        Scroll
    }
}
</script>
<style lang="stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

    .music-list
        position: fixed
        z-index: 100
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: $color-background
        .back
            position absolute
            top: 0
            left: 6px
            z-index: 50
            .icon-back
                display: block
                padding: 10px
                font-size: $font-size-large-x
                color: $color-theme
        .title
            position: absolute
            top: 0
            left: 10%
            z-index: 40
            width: 80%
            no-wrap()
            text-align: center
            line-height: 40px
            font-size: $font-size-large
            color: $color-text
        .bg-image
            position: relative
            width: 100%
            height: 0
            padding-top: 70%
            transform-origin: top
            background-size: cover
            .play-wrapper
                position: absolute
                bottom: 20px
                z-index: 50
                width: 100%
                .play
                    box-sizing: border-box
                    width: 135px
                    padding: 7px 0
                    margin: 0 auto
                    text-align: center
                    border: 1px solid $color-theme
                    color: $color-theme
                    border-radius: 100px
                    font-size: 0
                    .icon-play
                        display: inline-block
                        vertical-align: middle
                        margin-right: 6px
                        font-size: $font-size-medium-x
                    .text
                        display: inline-block
                        vertical-align: middle
                        font-size: $font-size-small
            .filter
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                background: rgba(7, 17, 27, 0.4)
            .bg-layer
                position: relative
                height: 100%
                background: $color-background
        .list
            // position: fixed
            width: 100%
            height: 100%
            background: $color-background
       
</style>

