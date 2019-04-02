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
    // $nextTick() 是 vue 提供的钩子，主要是确保 DOM 已经全部挂载完在调用下面的方法
    // 还可以通过 setIimeout 来实现
    // 发现使用 this.$nectTick() 存在问题，因此使用了 settimeout 20ms 的方法
    const _this = this;
    _this.tmpTimer = setTimeout(() => {
         _this._initSliderWidth();
        _this._initSlider();
        if (_this.autoPlay) {
            _this._play();
        }
    }, 20);
  },
 methods:{
 _initSliderWidth() {
    
          this.children = this.$refs.sliderGroup.children
          let width = 0
          // slider 可见宽度
          let sliderWidth = this.$refs.slider.clientWidth
          for (let i = 0; i < this.children.length; i++) {
           let child = this.children[i]
           // 设置每个子元素的样式及高度
           addClass(child, 'slider-item')
           child.style.width = sliderWidth + 'px'
           // 计算总宽度
           width += sliderWidth
          }
          // 循环播放首尾各加一个,因此总宽度还要加两倍的宽度
          if (this.loop) {
           width += 2 * sliderWidth
          }
          this.$refs.sliderGroup.style.width = width + 'px'
},
_initSlider() {
    const _this = this;
    _this._slider = new BScroll(_this.$refs.slider, {
    scrollX: true,
    scrollY: false,
    momentum: false,
    click:true,
    snap: {
        loop: this.loop, // 循环
        threshold: 0.1
    }
    });
    // 获取当前页
    _this._getCurrentPageIndex();
    // 滚动之前 清除timer
    _this._slider.on('beforeScrollStart',()=>{
        clearInterval(_this._timer);
    });
},
/**
 * @name _getCurrentPageIndex
 * @description 获取当前的 pageIndex
 * @author postbird
 */
_getCurrentPageIndex() {
    const _this = this;
    _this._slider.on("scrollEnd", () => {
    let index = _this._slider.getCurrentPage().pageX;
    _this.currentPageIndex = index;
    // 如果自动播放 则开启
    if(_this.autoPlay){
        _this._play();
    }
    });
},
  _initDots() {
  // 长度为n的空数组
  this.dots = new Array(this.children.length)
  },
/**
 * @name _play
 * @description 控制自动轮播
 * @author postbird
 */
_play(){
    const _this =this;
    let pageIndex = _this.currentPageIndex;
    _this._timer = setInterval(() => {
        pageIndex++;
        if(pageIndex >= this.children.length){
            pageIndex = 0;
        }
        _this._slider.goToPage(pageIndex);
    }, this.speed);
}
 },
//  // 生命周期destroyed销毁清除定时器，有利于内存释放
//  destroyed() {
//   clearTimeout(this.timer)
//  },
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