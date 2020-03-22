<template>
    <div action="">
         <aside><div class="iconfont"></div></aside>
         <input type="text" :value="text">
    </div>
</template>

<script>
    export default {
        name: 'search',
        props: {
            text: {
                type: String,
                default: '搜索'
            }
        },
        methods: {
            
        },
    }
</script>
<style scoped>
    div{display:flex;height:0.36rem;width:100%;border-radius:5px;background:#fff9ec;overflow: hidden;}
    div aside{display:flex;justify-content:center;align-items:center;width:0.35rem;}
    div aside .iconfont{width:0.13rem;height:0.13rem;background: url(./img/search.png); background-size:0.13rem;}
    div input{flex:1;font-size:0.14rem;color:#999;align-items:center;background:#fff9ec;}
</style>