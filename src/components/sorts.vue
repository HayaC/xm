<template>
  <div>
    <div class="sorts-header">
        <a href="#">&lt;</a>
        <p>商品分类</p>
        <a href="#">&gt;</a>
    </div>
    <div class="nav">
        <ul>
            <a href="#">
                <li>手机.电话卡</li>
            </a>
            <a href="#">
                <li>笔记本.平板</li>
            </a>
            <a href="#">
                <li>电视.盒子</li>
            </a>
            <a href="#">
                <li>智能硬件</li>
            </a>
        </ul>
    </div>
    <div class="banner">
        <img src="../assets/assets/banner.jpg" alt="" />
    </div>
    <div class="mobiles">
        <p>手机.电话卡</p>
        <div class="mobiles-detail">
            <a href="#">
                <dl>
                    <dt><img src="../assets/assets/mobile1.jpg" alt="" /></dt>
                    <dd>小米note2</dd>
                </dl>
            </a>
            <a href="#">
                <dl>
                    <dt><img src="../assets/assets/mobile1.jpg" alt="" /></dt>
                    <dd>小米note2</dd>
                </dl>
            </a>
            <a href="#">
                <dl>
                    <dt><img src="../assets/assets/mobile1.jpg" alt="" /></dt>
                    <dd>小米note2</dd>
                </dl>
            </a>
        </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.sorts-header {
    width: 100%;
    line-height: 2rem;
    display: flex;
    background: #eee;
    font-size: 1.5rem;
}
.sorts-header>a {
    flex: 1;
}
.nav {
    width: 100%;
    line-height: 3rem;
}
.nav>ul {
    width: 100%;
    display: flex;
    text-align: center;
}
.nav>ul>a {
    flex: 1; 
    width: 25%;
}
.mobiles {
    width: 100%;
    margin-top: 1rem;
}
.mobiles>p {
    width: 100%;
    text-align: center;
    line-height: 4rem;
}
.mobiles .mobiles-detail {
    width: 100%;
    overflow: hidden;
    text-align: center;
}
.mobiles .mobiles-detail>a>dl {
    width: 33.333%;
    float: left;
}
.mobiles .mobiles-detail>a>dl>dt {
    width: 100%;
    padding-left: 0.8rem;
}
.mobiles .mobiles-detail>a>dl>dt>img {
    width: 80%;
}
.mobiles .mobiles-detail>a>dl>dd {
    line-height: 2rem;
}
</style>
