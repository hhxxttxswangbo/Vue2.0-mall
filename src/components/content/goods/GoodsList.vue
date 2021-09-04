<template>
  <div class="goods">
    <goods-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goodsItem="item"
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsItem,
  },
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>