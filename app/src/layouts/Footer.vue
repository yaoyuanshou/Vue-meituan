<template>
    <div class="footer">
        <router-link to="/home" class="home aside" exact-active-class="home_active">
            <div></div><span>首页</span>
        </router-link>
        <router-link to="/order" class="order aside" exact-active-class="order_active">
            <div></div><span>订单</span>
        </router-link>
        <router-link to="/look" class="look aside" exact-active-class="look_active">
            <div></div><span>发现</span>
        </router-link>
        <router-link to="/user" class="me aside" exact-active-class="me_active">
            <div></div><span>我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>
<style scoped>
    .footer{width:100%;height:0.48rem;display:flex;background:rgba(247,247,247,0.9);justify-content:space-between;padding:0 0.35rem;position: fixed;bottom: 0;}
    .footer .aside{display:flex;flex-flow:column;justify-content:center;align-items:center;user-select: none;}
    .footer .aside span{font-size:0.08rem;color:#000;user-select: none;}
    .footer .home div{width: 0.25rem;height:0.25rem;background:url(../assets/img/home.png); background-size:0.25rem;}
    .footer .order div{width: 0.25rem;height:0.25rem;background:url(../assets/img/dingdan.png); background-size:0.25rem;}
    .footer .look div{width: 0.25rem;height:0.25rem;background:url(../assets/img/look.png); background-size:0.25rem;}
    .footer .me div{width: 0.23rem;height:0.23rem;background:url(../assets/img/me.png); background-size:0.23rem;}

    .footer .home_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/home1.png); background-size:0.25rem;}
    .footer .home_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .order_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/dingdan1.png); background-size:0.25rem;}
    .footer .order_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .look_active div{width: 0.25rem;height:0.25rem;background:url(../assets/img/look1.png); background-size:0.25rem;}
    .footer .look_active span{font-size:0.08rem;color:#f4ea2a;}
    .footer .me_active div{width: 0.23rem;height:0.23rem;background:url(../assets/img/me1.png); background-size:0.23rem;}
    .footer .me_active span{font-size:0.08rem;color:#f4ea2a;}
</style>