<template>
    <div class="recommend">
       <scroll ref="scroll" class="recommend-content">
        <div>
          <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
            <!-- <Slider>
              <div v-for="item in recommends">
                <a :href="item.linkUrl">
                  <img class="needsclick" :src="item.picUrl">
                </a>
              </div>
            </Slider> -->
          </div>
          <div class="slider" ref="slider">
              <div class="slider-group" ref="sliderGroup">
                  <div class="slider-item" v-for="(item,index) in list" :key="index" >
                      <a :href="item.linkUrl">
                          <img :src="item.picUrl" :alt="item.linkUrl" :style="`width:${width}`" ref="sliderItemImg">
                      </a>
                  </div>
              </div>
            <div class="dots" v-if="this.dots">
                  <span :class="`dot ${index === currentPageIndex ? 'active' :'' }`" v-for="(item,index) in list.length" :key="index"></span>
              </div>
          </div>
        </div>
       </scroll>
    </div>
</template>
<script>
import {getRecommend} from '@/api/recommend'
import Slider from '@/base/slider/slider'
import scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import {ERR_OK,commonParams,options} from '@/api/config'

export default {
    data() {
      return {
        recommends: []
      }
    },
    mounted() {
     
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend(){
        console.log(145476)
        getRecommend().then((res) =>{
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
            console.log(res.data.slider)
          }
        },(erro)=>{
          console.log(erro)
        })
      }
    },
    components: {
      Slider,
      scroll,
      Loading
    }
}
</script>
<style lang="stylus">
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
