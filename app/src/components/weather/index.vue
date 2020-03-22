<template>
    <article class="weather">
        <aside @click="$router.push('/jinx')">
            <span>多云</span>
            <span>15℃</span>
        </aside>
        <aside @click="$router.push('/jinx')"><div class="iconfont"></div></aside>
        <aside @click="$router.push('/jinx')"><div class="iconfont1"></div></aside>
    </article>
</template>

<script>
    export default {
        name:'weather'
    }
</script>
<style scoped>
    .weather{justify-content:flex-end;}
    .weather aside{display: flex;justify-content:center;align-items:center;}
    .weather aside:first-of-type{flex-flow:column;}
    .weather aside:first-of-type span:first-child{font-size:0.08rem;font-weight: bold;}
    .weather aside:first-of-type span:last-child{font-size:0.07rem;font-weight: bold;}
    .weather aside:nth-of-type(2) .iconfont{width:0.18rem;height:0.18rem;background:url(./img/weather.png);background-size: 0.18rem;}
    .weather aside:nth-of-type(3) .iconfont1{width:0.18rem;height:0.18rem;background:url(./img/qq.png);background-size: 0.18rem;}
    .weather aside:nth-of-type(2){padding:0 0.1rem 0 0.05rem;}
    .weather aside:nth-of-type(3){padding-left:0.1rem;}
</style>