import jsonp from '@/common/jsonp/jsonp'
import {commonParams,options,baseUrl} from './config'

export function get\

export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  
    const data = Object.assign({}, commonParams, {
      platform: 'h5',
      uin: 0,
      needNewCode: 1
    })
  
    return jsonp(url, data, options)
  }