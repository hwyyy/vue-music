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
   components:{
       Bscroll
   }
}
</script>


