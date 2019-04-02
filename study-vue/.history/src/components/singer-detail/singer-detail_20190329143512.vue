<template>
    <transition name="slider">
    <div class="music-list">dfshhhhhhhhhhhhhhhhhhhhhh</div>

    </transition>
</template>
<script>
export default {
    created(){
        console.log(3284727398)
    },
    data() {
        return{

        }
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
    .music-list
        position: fixed
        z-index: 100
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: $color-background
</style>

