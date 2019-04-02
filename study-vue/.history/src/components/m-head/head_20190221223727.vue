<template>
  <div class="m-header">
    <div class="icon"><img src="" alt=""></div>
    <div class="text"><h1>Chicken Music</h1></div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable" 
  @import "../../common/stylus/mixin"

  .m-header
      position: relative;
      height: 44px;
      text-align: center;
      color: #ffcd32;
      font-size: 0;
      display: flex;
      justify-items: center;
      align-items: center;
      .icon
        display: inline-block
        vertical-align: top
        margin-top: 6px
        width: 30px
        height: 32px
        margin-right: 9px
        bg-image('logo')
        background-size: 30px 32px
</style>

