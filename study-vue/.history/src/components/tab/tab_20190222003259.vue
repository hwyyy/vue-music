<template>
    <div class="tab">
        <router-link tag="div"  class="tab-item" to="/recommend"><span class="tab-link">推荐</span></router-link>
        <router-link tag="div" class="tab-item" to="/singer"><span class="tab-link">歌手</span></router-link>
        <router-link tag="div"  class="tab-item" to="/rank"><span class="tab-link">排行</span></router-link>    
        <router-link tag="div" class="tab-item" to="/search"><span class="tab-link">搜索</span></router-link>
    </div>
    
</template>
<script>
    export default {
      
    }
</script>
<style lang="stylus">
  @import "../../common/stylus/variable"
    .tab
        display: flex;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        .tab-item
            flex: 1;
            text-align: center;
            .tab-link
                padding-bottom: 5px;
                color: hsla(0,0%,100%,.5);
        .router-link-active
            .tab-link
                color: #ffcd32;
                border-bottom: 2px solid #ffcd32;


</style>


