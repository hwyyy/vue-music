<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import MHead from 'components/m-head/head'
export default {
  name: 'App'
}
</script>

<style lang="stylus">
    #app 
      color: $color-sub-theme;
</style>
