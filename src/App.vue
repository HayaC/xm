<template>
  <div>
    <div class="tab">
      <div><a href="#/home">首页</a></div>
      <div><a href="#/sorts">分类</a></div>
      <div><a href="#/car">购物车</a></div>
      <div><a href="#/mine">我的</a></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.tab {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  font-size: 1rem;
}
.tab>div {
  flex: 1;
  text-align: center;
}
</style>
