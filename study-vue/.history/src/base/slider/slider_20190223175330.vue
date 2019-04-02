<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots">
            <span class="dot"> </span>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll"

export default {
    data(){
        return{
            dots: [],
            currentPageIndex: 0
        }
    },
    props:{
        loop: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 4000
        }
    },
    methods:{
        _initSlider() {
            this.slider = new BScroll(this.$refs.slider, {
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: true,
            snapLoop: this.loop,
            snapThreshold: 0.3,
            snapSpeed: 400
            })

            this.slider.on('scrollEnd', () => {
            let pageIndex = this.slider.getCurrentPage().pageX
            if (this.loop) {
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
             },
    }
}
</script>


