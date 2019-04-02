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

  },
  methods:{
    _getSingerList(){
      getSingerList().then(function(data){
        console.log(data)
      },function(error){
        console.log(error)
      })
    }
  }
}
</script>
