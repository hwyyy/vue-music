<template>
  <div class="singer">
    <List-view :data='dataList' @select='selectSinger'></List-view>
     <router-view></router-view>
  </div>
 
</template>
<script>
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import ListView from '@/base/ListView/ListView'
import Singer from '@/common/js/singer'

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
  components: {
    ListView
  },
  methods:{
    selectSinger(singer){
      this.$router.push({
        path: `/singer/${singer.id}`
      })
    },
    _getSingerList(){
      let _this = this
      getSingerList().then((res) => {

        _this.list = res.data.list
        _this.dataList = _this._normalizeSinger()
      },(error) => {
        console.log(error)
      })
    },
    _normalizeSinger(){
      let dataList = this.list
      let _this = this
      let list = {
        hot: {
          title: HOT_NAME,
          items: []
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
              items: [
                new Singer({
                  name: item.Fsinger_name,
                  id: item.Fsinger_mid
                })
              ]
            }
            list[key] = message
          }else{
            let message = new Singer({name: item.Fsinger_name,id: item.Fsinger_mid})
            list[key].items.push(message)
          }
        }
      })
      // 为了得到有序列表，我们需要处理list
      let hot = []
      let ret = []
      for(let key in list){
        let val = list[key]
        let title = val.title
        let reg = (/[a-zA-Z]/)
        if(reg.test(title)){
          ret.push(val)
        }else if(val.title === HOT_NAME){
          hot.push(val)
        }
        
      }
      ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
      return hot.concat(ret)
    }
  },
}
</script>
<style lang="stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
