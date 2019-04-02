<template>
  <div id="app">
    <MHead></MHead>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHead from '@/components/m-head/head'
import tab from '@/components/tab/tab'

export default {
  name: 'App',
  components: {
    MHead,
    tab
  }
}
</script>

<style lang="stylus">
    #app 
      color: $color-sub-theme;
</style>
