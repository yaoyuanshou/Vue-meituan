<template>
    <div class="headers">
        <section>
            <place :place=" '青岛' "/>
            <weather/>
        </section>
        <search text="请输入商家或商品名称"/>
    </div>
</template>

<script>
    import Search from '../components/search'
    import Place from '../components/place'
    import Weather from '../components/weather';
    export default {
        name:'Header',
        components: {
            Search,Place,Weather
        }
    }
</script>
<style scoped>
    .headers{height:0.87rem;background:#ffc74a;display:flex;flex-flow:column;padding:0 0.1rem 0 0.1rem;}
    .headers section{display:flex;flex-flow:row;height:0.37rem;justify-content: space-between;}
    .headers section article{display:flex;}
</style>