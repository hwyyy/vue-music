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
    this._getSingerList()
  },
  methods:{
    _getSingerList(){
      getSingerList().then((res) => {
        console.log(res.data)
      },(error) => {
        console.log(error)
      })
    }
  }
}
</script>
