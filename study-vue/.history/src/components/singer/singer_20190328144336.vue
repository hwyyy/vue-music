<template>
  
</template>
<script>
import {getSingerList} from '../../api/singer'
import {ERR_OK} from 'api/config'
import func from './vue-temp/vue-editor-bridge';

export default {
  data(){
    return {

    }
  },
  created: {
    this._getSingerList()
  },
  methods:{
    function _getSingerList(){
      getSingerList().then(function(res){
        console.log(res.data)
      },function(error){
        console.log(error)
      })
    }
  }
}
</script>
