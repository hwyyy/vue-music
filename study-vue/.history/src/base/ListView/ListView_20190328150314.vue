<template>
    <div>
        <Scroll></Scroll>
        <Loading></Loading>
    </div>
    
</template>
<script>
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import {getData} from '@/common/js/dom'

export default {
    data(){
        return{

        }
    },
    props: {
        data: {
            type: Array,
            default:[]
        }
    },
    methods: {

    },
    mounted(){

    },
    components:{
        Scroll,
        Loading
    }
}
</script>

