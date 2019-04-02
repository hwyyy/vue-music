<template>
 <div>
 <scroll :data="su" class="scroll">
  <div>
   <div class="slider-wrapper">
    <slider>
     <div v-for='item in slider'>
      <a href="">
       <img :src="item.url" alt="">
      </a>
     </div>
    </slider>
   </div>
   <ul v-for='item in su'>
    <li>{{item}}</li>
   </ul>
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
        recommends: [],
         slider: [
    {url: 'http://upload-images.jianshu.io/upload_images/7932253-54c81df0beed405b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1080/q/50'},
    {url: 'https://y.gtimg.cn/music/photo_new/T003R720x288M000004ERTpn1UBu2f.jpg?max_age=2592000&max_age=2592000'},
    {url: 'https://y.gtimg.cn/music/photo_new/T003R720x288M00000077s7P0HaZpc.jpg?max_age=2592000&max_age=2592000'},
    {url: 'https://y.gtimg.cn/music/photo_new/T003R720x288M000001QL1Si05yMPq.jpg?max_age=2592000&max_age=2592000'},
    {url: 'https://y.gtimg.cn/music/photo_new/T003R720x288M000002ke7OC3ooZ5g.jpg?max_age=2592000&max_age=2592000'},
   ],
   su:[1,2,3,4,5,6,7,8,9,10,1,2,3,4,2,3,5,8,7,4,]
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
