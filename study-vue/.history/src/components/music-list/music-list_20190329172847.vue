<template>
    <div class="music-list">
        djhfkjdhs
    </div>
</template>
<script>
export default {
    props:{
        songs: {
            type: Array,
            default: []
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

