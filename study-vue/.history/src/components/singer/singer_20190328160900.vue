<template>
  <div>
    <List-view :data='dataList'></List-view>
  </div>
</template>
<script>
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import ListView from '@/base/ListView/ListView'
import singer from '@/common/js/singer'

const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'

export default {
  data(){
    return {
      dataList: [],
      list: []
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
        _this.list = res.data.list
        _this._normalizeSinger()
      },(error) => {
        console.log(error)
      })
    },
    _normalizeSinger(){
      let dataList = this.list
      let _this = this
      let list = {
        hot: {
          title: '热门',
          item: []
        }
      }
      dataList.map((item,index) => {
        if (index < HOT_SINGER_LEN) {
          list.hot.items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        }else{
          let key = item.Findex
          if(!list[key]){
            let message = {
              title: key,
              item: [
                new Singer({
                  name: item.Fsinger_name,
                  id: item.Fsinger_mid
                })
              ]
            }
            list[key] = message
          }else{
            let message = new Singer({name: item.Fsinger_name,id: item.Fsinger_mid})
            list[key].item.push(message)
          }
        }
      })
      console.log(list)
    }
  },
  components:{
    ListView
  }
}
</script>
