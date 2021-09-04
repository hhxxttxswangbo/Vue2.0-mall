<template>
  <div class="cart-list">
    <!-- 此处item是从cartList中获取，在模型里已经添加了checked属性，然后把item用itemInfo传给子组件，因此子组件里用itemInfo.checked选中 -->
    <cart-list-item
      v-for="(item, index) in $store.state.cartList"
      :key="index"
      :item-info="item"
    />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  components: {
    CartListItem,
  },
};
</script>

<style scoped>
</style>