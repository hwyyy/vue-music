<template>
    <div class="recommend">
      <div>ggkgkjgkjk</div>
        <div class="wrapper">
            <Slider>
              <div >

              </div>
            </Slider>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {getRecommend} from '@/api/recommend'
import Slider from '@/base/slider/slider'

export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {})
      })
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend(){
        console.log(145476)
        getRecommend.then((res) =>{
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
