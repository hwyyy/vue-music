<template>
    <div class="recommend">
        <div class="wrapper">
            <Slider>
              <div v-for="item in recommends">
                 <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
              </div>
            </Slider>
        </div>
    </div>
</template>
<script>
import {getRecommend} from '@/api/recommend'
import Slider from '@/base/slider/slider'
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
      Slider
    }
}
</script>
<style lang="stylus">
    
</style>
