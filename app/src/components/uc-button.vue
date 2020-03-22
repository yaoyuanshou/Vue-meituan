<template>

    <button class="btn" @click="$emit('click')">{{btn}}</button>

</template>

<script>
    export default {
        name:'uc-button',
        props: {
            btn: {
                type: String,
                default: '按钮'
            },
        },
    }
</script>
<style scoped>
    .btn{width:2.79rem;height:0.32rem;background:#ffba1f;outline: none;border:1px solid #ffae02;font-size:0.13rem;color:#fff;border-radius:3px;}
</style>