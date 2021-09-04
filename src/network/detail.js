import { request } from './request';

export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

//详情页里数据杂乱无章，因此使用类整合详情页轮播图下面的数据，constructor里是各分支的接口
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
    this.realPrice = itemInfo.lowNowPrice
  }
}