<template>
    <div class="set-cell" @click="$router.push('/jinx')">
        <p>{{p}}</p>
        <span>{{span}}</span>
        <div class="jian"></div>
    </div>
</template>

<script>
    export default {
        name: 'set-cell',
        props: ['p','span']
    }
</script>
<style scoped>
    .set-cell{display: flex;width:100%;height:0.53rem;justify-content: space-between;align-items: center;padding:0 0.2rem;border-bottom: 1px solid #ececec;}
    .set-cell p {font-size: 0.15rem;}
    .set-cell span {font-size: 0.12rem; color:#ccc;margin-left:1.3rem;}
    .set-cell .jian{width:0.15rem; height:0.15rem;background: url(../assets/img/jian.png) no-repeat right center/0.15rem 0.15rem;}
</style>