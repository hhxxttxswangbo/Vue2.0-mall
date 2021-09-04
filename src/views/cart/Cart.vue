<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车({{ $store.state.cartList.length }})
      </div>
      </nav-bar
    >
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部 -->
    <bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./ChildComps/CartList";
import BottomBar from "./ChildComps/BottomBar";

export default {
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>