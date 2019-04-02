import Vue from 'vue'
import Router from 'vue-router'
import MHead from '@/components/m-head/head'
import singer from '@/components/singer/singer'
import recommend from '@/components/recommend/recommend'
import rank from '@/components/rank/rank'
import search from '@/components/search/search'
import singerDetail from '@/components/singer-detail/singer-detail'
import recommendDetail from '@/components/recommend-detail/recommend-detail'


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
      component: recommend,
      children: [
        {
          path: ':id',
          component:recommendDetail
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      children: [
        {
          path: ':id',
          component: singerDetail,
          name: 'singerDetail',
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
