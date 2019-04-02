<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots">
            <span class="dot" v-for="{item,index} in dots"> </span>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>


