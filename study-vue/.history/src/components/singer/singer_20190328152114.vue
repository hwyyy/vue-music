<template>
  <div>
    <List-view :data='dataList'></List-view>
  </div>
</template>
<script>
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import ListView from '@/base/ListView/ListView'

const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'

export default {
  data(){
    return {
      dataList: []
    }
  },
  created(){
    this._getSingerList()
  },
  methods:{
    _getSingerList(){
      let _this = this
      getSingerList().then((res) => {
        console.log(res.data.list)
        _this.dataList = res.data.list
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
