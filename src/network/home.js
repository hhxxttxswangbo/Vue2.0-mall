import { request } from './request';

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//商品数据，要传递参数（类型和页码）
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    //勿忘后面的参数
    params: {
      type,
      page
    }
  })
}
