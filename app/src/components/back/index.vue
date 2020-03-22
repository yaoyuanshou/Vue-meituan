<template>
    <div class="back" :style="{background: bgColor}">
        <button @click="goBack" v-if="bl"></button>
        <h1>{{nav}}</h1>
    </div>
</template>

<script>
    export default {
        name:'back',
        props: {
            nav: {
                type: String,
                default: '标题'
            },
            bl: {
                default:Boolean,
                default: true
            },
            bgColor: {
                type: String,
                default: '#f7f7f7'
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            }
        },
    }
</script>
<style scoped>
    .back{height:0.5rem;width:100%;display: flex;justify-content: center;position: relative;}
    .back button{position: absolute;left:0;margin:0.17rem 0.15rem;width:0.09rem;height:0.16rem;background:url(./img/back.png) no-repeat 0/100%;border:0;outline: none;}
    .back h1{font-size: 0.19rem;align-self: center;}
</style>