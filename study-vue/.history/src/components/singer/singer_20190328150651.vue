<template>
  <div>
    <List-view></List-view>
  </div>
</template>
<script>
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import ListView from '@/base/ListView/ListView'

export default {
  data(){
    return {

    }
  },
  created(){
    this._getSingerList()
  },
  methods:{
    _getSingerList(){
      getSingerList().then((res) => {
        console.log(res.data.list)
      },(error) => {
        console.log(error)
      })
    }
  },
  components:{
    ListView
  }
}
</script>
