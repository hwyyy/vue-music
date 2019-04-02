<template>
    <div class="music-list">
        <div class="back" @click="back">
            <i class="icon-back"></i>
        </div>
        <h1 class="title" v-html="title"></h1>
        <div class="bg-image" :style="bgStyle" ref="bgImage">
            <div class="play-wrapper">
                <div ref="playBtn" v-show="songs.length>0" class="play" @click="random">
                    <i class="icon-play"></i>
                    <span class="text">随机播放全部</span>
                </div>
            </div>
            <div class="filter" ref="filter"></div>
        </div>
    </div>
</template>
<script>
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
    computed:{
        bgStyle(){
            return `background-image': url(${this.bgImage})`
        }
    }
    methods:{
        back() {
            this.$router.back()
        },
        random(){

        }
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
</style>

