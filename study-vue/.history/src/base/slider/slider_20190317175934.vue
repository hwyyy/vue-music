<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import {addClass} from '@/common/js/dom'
  import BScroll from 'better-scroll'

</script>
