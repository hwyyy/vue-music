<template>
  <div class="m-header">
    <div class="icon"><img src="" alt=""></div>
    <div><h1>Chicken Music</h1></div>
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

<style lang="stylus">
  @import "common/stylus/variable.styl"
  @import "common/stylus/mixin.styl"
  .m-header
      position: relative;
      height: 44px;
      text-align: center;
      color: #ffcd32;
      font-size: 0;
      display: flex;
      justify-items: center;
      align-items: center;
</style>

