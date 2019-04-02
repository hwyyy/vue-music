<template>
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>
<script>
import MusicList from '@/components/music-list/music-list'
import {mapGetters} from 'vuex'
import {getSingerDetail} from '@/api/singer'


export default {
    created(){
        this._getSingerDetail()
    },
    data() {
        return {
            songs: []
        }
    },
    computed:{
        ...mapGetters([
            'singer'
        ]),
        title(){
            return this.singer.title
        },
        bgImage(){
            return this.singer.avatar
        }
    },
    methods: {
        _getSingerDetail(){
            let id = this.singer.id
            let _this = this
            getSingerDetail(id).then(res => {
                console.log(res.data)
            },erro => {

            })
        }
    },
    components:{
        MusicList
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"

    .slide-enter-active, .slide-leave-active
        transition: all 0.3s
    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>

