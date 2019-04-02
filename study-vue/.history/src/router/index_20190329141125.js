import Vue from 'vue'
import Router from 'vue-router'
import MHead from '@/components/m-head/head'
import singer from '@/components/singer/singer'
import recommend from '@/components/recommend/recommend'
import rank from '@/components/rank/rank'
import search from '@/components/search/search'
import singerDetail from '@/components/singer-detail/singer-detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: recommend,
      redirect:'recommend'
    },
    {
      path: '/recommend',
      name:'recommend',
      component: recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      childrens:[
        {
          path: ':id',
          component: singerDetail
        }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
