<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  methods:{
    imgLoad(){
      this.$emit("swiperImageLoad")
    }
  },
  props: {
    //封装了一层一定要有数据传递过来给子组件
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>