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
    // _getSingerList()
  },
  methods:{
    getSingerList().then(function(res){
        console.log(res.data)
      },function(error){
        console.log(error)
      })
    }
  }
}
</script>
