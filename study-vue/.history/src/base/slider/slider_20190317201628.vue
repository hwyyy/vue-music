<template>
 <div class="slider" ref="slider">
 <div class="slider-group" ref="sliderGroup">
  <slot>
  </slot>
 </div>
 <div class="dots">
  <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
 </div>
 </div>
</template>
 
<script>
  import {addClass} from '@/common/js/dom'
  import BScroll from 'better-scroll'
 export default{
 data() {
  return {
  dots:[],
  currentPageIndex: 0
  }
 },
 props:{
  loop:{
  type:Boolean,
  default:true
  },
  autoPlay:{
  type:Boolean,
  default:true
  },
  interval:{
  type: Number,
  default:4000
  }
 },
 mounted() {
  this._setSliderWidth()
  setTimeout(() => {
  // 在初始化slider前初始化dot
  this._initDots()
  this._initSlider()
  if (this.autoPlay) {
   this._play()
  }
  }, 20)
  // 监听窗口大小改变时间
  window.addEventListener('resize', () => {
  if (!this.slider) {
   return
  }
  this._setSliderWidth(true)
  this.slider.refresh()
  })
 },
 methods:{
  _setSliderWidth(isResize) {
 _initSliderWidth() {
    const imgWidth = this.$refs.sliderItemImg[0].clientWidth;
    let sliderWidth = imgWidth * this.list.length;
    if (this.loop) {
    // 循环轮播需要添加两个img DOM 的宽度
    sliderWidth += imgWidth * 2;
    }
    this.$refs.sliderGroup.style.width = sliderWidth + "px";
    this.$refs.sliderItemImg.forEach(item => {
    item.style.width = imgWidth + "px";
    });
},
  },
  _initSlider() {
  this.slider = new BScroll(this.$refs.slider, {
   scrollX: true,
   scrollY: false,
   momentum: false,
   snap: true,
   snapLoop: this.loop,
   snapThreshold: 0.3,
   snapSpeed: 400,
   // click:true
  })
  // 监听滚动结束时间获取pageX
  this.slider.on('scrollEnd', () => {
   let pageIndex = this.slider.getCurrentPage().pageX
   if (this.loop) {
   // 由于bscroll循环播放首尾各加一个,因此索引-1
   pageIndex -= 1
   }
   this.currentPageIndex = pageIndex
   if (this.autoPlay) {
   this._play()
   }
  })
  this.slider.on('beforeScrollStart', () => {
   if (this.autoPlay) {
   clearTimeout(this.timer)
   }
  })
  },
  _initDots() {
  // 长度为n的空数组
  this.dots = new Array(this.children.length)
  },
  _play() {
  // currentPageIndex为不含首尾副本的索引，因此若有循环要+2
  let pageIndex = this.currentPageIndex + 1
  if (this.loop) {
   pageIndex += 1
  }
  this.timer = setTimeout(() => {
   this.slider.goToPage(pageIndex, 0, 400)
  }, this.interval)
  }
 },
 // 生命周期destroyed销毁清除定时器，有利于内存释放
 destroyed() {
  clearTimeout(this.timer)
 },
 }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>