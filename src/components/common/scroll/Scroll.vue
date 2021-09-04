<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3, //滚动类型
      click: true, //允许点击
      pullUpLoad: true, //上拉加载更多
    });

    //on绑定滚动事件scroll
    this.scroll.on("scroll", (position) => {
      // console.log(position.y);
      this.$emit("scroll", position);
    });

    //上拉加载数据，触发pullUpLoad
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
      //完成上拉，等数据请求完成，要将新数据展示出来
      this.scroll && this.scroll.finishPullUp();
      //重新计算高度
      this.scroll && this.scroll.refresh();
    });
  },
};
</script>

<style>
</style>