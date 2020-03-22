<template>
    <article class="place" @click="$router.push('/jinx')">
        <aside><div class="iconfont"></div></aside>
        <span>{{place}}</span>
        <aside>
            <img src="./img/jian.png" alt="">
        </aside>
    </article>
</template>

<script>
    export default {
        name:'place',
        props:['place']
    }
</script>
<style scoped>
    .place aside{display:flex;align-items:center;padding:0 0.06rem;}
    .place aside:first-of-type .iconfont{width:0.15rem;height:0.15rem;background:url(./img/place.png); background-size: 0.15rem;}
    .place aside:first-of-type{padding:0;}
    .place span{font-size:0.15rem;color:#333;padding-left:0.06rem;align-self:center;font-weight: bold;}
    .place aside:last-of-type img{width:0.04rem;height:0.07rem;}
</style>