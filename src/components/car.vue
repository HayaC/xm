<template>
  <div>
    <div class="car-header">
        <a href="#">&lt;</a>
        <p>购物车</p>
        <a href="#"></a>
    </div>
    <div class="load">
        <p>登陆后享受更多优惠</p>
        <a href="#">去登陆&gt;</a>
    </div>
  </div>
</template>

<script>

</script>

<style>
html {
    background: red;
}
.car-header {
    width: 100%;
    line-height: 2rem;
    padding: 0.5rem 1rem;
    display: flex;
    background: #eee;
    font-size: 1.5rem;
}
.car-header>a {
    flex: 1;
}
.load {
    width: 100%;
    padding: 0.5rem 1rem;
    line-height: 2rem;
    display: flex;
}
.load>p {
    font-size: 1.5rem;
    color: black;
    width: 80%;
}
.load>a {
    font-size: 0.8rem;
    text-align: right;
}
</style>
