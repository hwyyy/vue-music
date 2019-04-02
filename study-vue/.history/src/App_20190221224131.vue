<template>
  <div id="app">
    <MHead></MHead>
    <router-view/>
  </div>
</template>

<script>
import MHead from '@/components/m-head/head'
export default {
  name: 'App',
  components: {
    MHead
  }
}
</script>

<style lang="stylus">
    #app 
      color: $color-sub-theme;
</style>
