<template>
    <dl class="cell" :style="{marginBottom: buttom}" @click="getDetail">
        <dt :style="{backgroundImage: data.img}"></dt>
        <dd>
            <p class="p1">
                <span>{{data.name}}</span>
                <span>{{data.distance}}km</span>
            </p>
            <p class="p2">
                <span>★★★★★</span>
                <span>{{data.evaluation}}</span>
                <span>月销{{data.mounth}}</span>
            </p>
            <p class="p3">
                <span>起送￥{{data.pick}}</span>
                <span>|</span>
                <span>配送￥{{data.delivery}}</span>
            </p>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'cell',
        data() {
            return {
                
            }
        },
        props: {
            buttom:{
                type: String,
                default: '0.42rem',
            },
            data: {
                type:Object,
                required:true,
                default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
                //...
                return {}
                }
            },
            apiName: {
                type: String,
                default: null
            }
        },
        methods: {
            getDetail(){
                if(this.apiName){
                    this.$router.replace(`/details/${this.data._id}?apiName=${this.apiName}`);//编程式跳转
                }
            }
        },
    }
</script>
<style scoped>
    .cell{display:flex;}
    .cell dt{width:1.01rem;height:0.61rem;background-size: 100%;background-image: url(./img/default.jpg);}
    .cell dd{display:flex; flex-flow: column;justify-content: space-between;margin-left:0.11rem}
    .cell dd p{display: flex;align-items: center;}
    .cell dd .p1{justify-content: space-between;width:2.37rem; }
    .cell dd .p1 span:nth-child(1){font-size: 0.15rem;font-weight: bold;}
    .cell dd .p1 span:nth-child(2){font-size: 0.11rem;color:#ccc;}
    .cell dd .p2 span{font-size: 0.11rem;}
    .cell dd .p2 span:nth-child(2){padding: 0 0.09rem;}
    .cell dd .p3 span{font-size:0.12rem; color:#8e8e8e}
    .cell dd .p3 span:nth-child(2){padding: 0 0.04rem;}

</style>    