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

<script type="text/ecmascript-6">
  import {addClass} from '@/common/js/dom'
  import BScroll from 'better-scroll'

  export default {
    name: 'slider',
    props: {
      loop: { //循环
        type: Boolean,
        default: true
      },
      autoPlay: { //自动轮播
        type: Boolean,
        default: true
      },
      interval: { // 定时
        type: Number,
        default: 4000
      }
    },
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    mounted() {
      this._setSliderWidth()
      setTimeout(() => {
        //   在初始化slider前初始化dot
        this._initDots()
        this._initSlider()
        if (this.autoPlay) {
        // 自动轮播 循环播放
          this._play()
        }
      }, 20)

      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
        this.slider.refresh()
      })
    },
    activated() {
      if (this.autoPlay) {
        this._play()
      }
    },
    deactivated() {
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    },
    methods: {
     _setSliderWidth(isResize) {
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
          if (this.loop && !isResize) {
           width += 2 * sliderWidth
          }
          this.$refs.sliderGroup.style.width = width + 'px'
        },
      _initSlider() {
        //   this.slider = new BScroll(this.$refs.slider, {
        //    scrollX: true,
        //    scrollY: false,
        //    momentum: false,
        //    snap: true,
        //    snapLoop: this.loop,
        //    snapThreshold: 0.3,
        //    snapSpeed: 400,
        //    // click:true
        //   })
        const _this = this;
        _this.slider = new BScroll(_this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        click:true,
        snap: {
            loop: this.loop, // 循环
            threshold: 0.1
        }
        });
          // 监听滚动结束时间获取pageX 第几个图片
          this.slider.on('scrollEnd', () => {
           let pageIndex = this.slider.getCurrentPage().pageX
           if (this.loop) {
           // 由于bscroll循环播放首尾各加一个,因此索引-1
        //     pageIndex -= 1 加上这行 会有bug
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
        this.dots = new Array(this.children.length)
      },
      _play() {
        // currentPageIndex为不含首尾副本的索引即小白点的索引，因此若有循环要+2
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        var _this = this
        this.timer = setTimeout(() => {
          _this.slider.goToPage(pageIndex, 0, 400)
        }, _this.interval)
      }
    }
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