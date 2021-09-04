<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabbar {
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
</style>