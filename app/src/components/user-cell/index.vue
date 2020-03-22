<template>
    <div class="user-cell" @click="$router.push('/jinx')">
        <div class="xing">
            <span :style="{backgroundImage: `url(${img})`}"></span>
            <span>{{p}}</span>
        </div>
        <div class="jian">
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user-cell',
        props: {
            img:{
                type: String,
            },
            p: {
                type: String,
                default: '我爱jinx！！！'
            }
        }
    }
</script>
<style scoped>
    .user-cell{height:0.4rem;background:#fff;display: flex;justify-content: space-between;align-items: center;padding:0 0.12rem;margin-bottom:2px}
    .user-cell .xing{display: flex;}
    .user-cell .xing span:nth-child(2){font-size: 0.13rem; font-weight: bold;}
    .user-cell .xing span:nth-child(1){width:0.19rem;height:0.19rem;background-image:url(./img/xing.png);background-size: 100%;margin-right:0.08rem}
    .user-cell .jian{width:0.07rem;height:0.12rem;background-size:0.07rem 0.12rem;background-image:url(./img/jian.png);}
</style>