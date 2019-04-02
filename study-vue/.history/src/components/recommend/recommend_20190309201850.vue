<template>
    <div class="recommend">
       <scroll ref="scroll" class="recommend-content">
        <div>
          <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
            <Slider>
              <div v-for="(item, index) in recommends">
                <a :href="item.linkUrl">
                  <img class="needsclick" :src="item.picUrl">
                </a>
              </div>
            </Slider>
          </div>
        </div>
       </scroll>
    </div>
</template>
<script>
import {getRecommend} from '@/api/recommend'
import Slider from '@/base/slider/slider'
import scroll from '@/base/scroll/scroll'
  import Loading from 'base/loading/loading'

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
      scroll
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
</style>
