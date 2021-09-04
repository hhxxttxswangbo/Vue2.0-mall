<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">

      </slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
}

.left .rigth {
  width: 60px;
  height: 44px;
}

.center {
  flex: 1;
  background-color: pink;
  color: #fff;
  font-size: 22px;
}
</style>