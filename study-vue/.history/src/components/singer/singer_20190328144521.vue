<template>
  
</template>
<script>
import {getSingerList} from '../../api/singer'
import {ERR_OK} from '../../api/config'

export default {
  data(){
    return {

    }
  },
  created: {
    // _getSingerList()
  },
  methods:{
    _getSingerList(){
      getSingerList().then(function(res){
        console.log(res.data)
      },function(error){
        console.log(error)
      })
    }
  }
}
</script>
