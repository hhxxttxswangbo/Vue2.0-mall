
<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" />
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./ChildComps/DetailNavBar";
import { getDetailData, Goods } from "network/detail.js";
import DetailSwiper from "./ChildComps/DetailSwiper";
import DetailBaseInfo from "./ChildComps/DetailBaseInfo";
import DetailBottomBar from "./ChildComps/DetailBottomBar";

export default {
  //name属性一定要有，否则keep-alive里的excluSde没用
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
    };
  },
  created() {
    //1.保存传入的iid,动态路由获取id，id与配置路由时叫的名字一样
    this.iid = this.$route.params.iid;
    //2.根据iid请求详情数据
    getDetailData(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      //3.//使用类整合详情页轮播图下面的数据,即商品信息数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
    });
  },
  methods: {
    addCart() {
      let product = {};
      product.images = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.commit("addToCart", product);
    },
  },
};
</script>

<style scoped>
.detail-nav {
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>