<template>
    <div>
        <Scroll>
            <ul>
                <li v-for="group in data" class="list-group" ref="listGroup">
                    <h2 class="list-group-title">{{group.title}}</h2>
                    <uL>
                        <li @click="selectItem(item)" v-for="item in group.items" class="list-group-item">
                            <img class="avatar" v-lazy="item.avatar">
                            <span class="name">{{item.name}}</span>
                        </li>
                    </uL>
                </li>
            </ul>
        </Scroll>
        <Loading v-if="data.length == 0"></Loading>
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
        selectItem(item){
            this.$emit('select', item)
        }
    },
    mounted(){

    },
    components:{
        Scroll,
        Loading
    }
}
</script>
<style lang="stylus">
 @import "~common/stylus/variable"

</style>


