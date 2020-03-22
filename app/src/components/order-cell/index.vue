<template>
    <div class="order-cell" @click="getODetails">
        <div class="cell-t">
            <dl>
                <dt :style="{backgroundImage: data.img}"></dt>
                <dd>
                    <p>{{data.name}}</p>
                    <span>{{data.time | date}}</span>
                </dd>
            </dl>
            <p>{{data.log | log}}</p>
        </div>
        <div class="solid"></div>
        <div class="cell-f">
            <p>{{data.all}}</p>
            <span>{{data.pay | pay}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'order-cell',
        props: {
            data: {
                type:Object,
                required:true,
                default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
                //...
                return {}
                }
            },
            apiName:{
                type:String,
                default:null
            }
        },
        filters: {
            date(data){
                let doubleZero = n => n < 10 ? '0' + n : n
                let d = new Date();
                d.setTime(data * 1000);
                let year = d.getFullYear();
                let month = d.getMonth() + 1;
                let date = d.getDate();
                let hour = d.getHours();
                let min = d.getMinutes();
                let sec = d.getSeconds();

                return `${year}-${month}-${date} ${doubleZero(hour)}:${doubleZero(min)}:${doubleZero(sec)}`
            },
            pay(data, currency = '￥', digit = 2){
                return currency + Number(data).toFixed(digit)
            },
            log(data){
                if(data === 0){
                    return '订单未完成'
                }else{
                    return '订单已完成'
                }
            }
        },
        computed: {
            
        },
        methods: {
            getODetails(){
                if(this.apiName){
                // '路由跳转':'/detail/23423423443?apiname=column'
                this.$router.push(`/oDetails/${this.data._id}?apiName=${this.apiName}`);//编程式跳转
                }
            }
        },
    }
</script>
<style scoped>
    .order-cell{width:100%;height:1.06rem;background:#fff;display: flex;flex-flow: column;padding:0.16rem;margin-bottom:0.1rem;}
    .order-cell .cell-t{display: flex;justify-content: space-between;background:url(./img/jian.png) no-repeat 2rem 0.16rem/0.07rem 0.08rem;}
    .order-cell .cell-t dl{display: flex;}
    .order-cell .cell-t dl dt{width:0.32rem;height:0.32rem;margin-right:0.11rem;background-size:100%;background-image:url(./img/default.jpg)}
    .order-cell .cell-t dl dd{display: flex;flex-flow: column;justify-content: center;}
    .order-cell .cell-t dl dd p{font-size:0.17rem;margin-bottom: 0.07rem;}
    .order-cell .cell-t dl dd span{font-size:0.08rem;color:#777;}
    .order-cell .cell-t>p {font-size:0.11rem;color:#9e9e9e;padding-top:0.1rem;}
    .order-cell .cell-f{display: flex;justify-content: space-between;padding: 0.16rem 0;align-items: center;}
    .order-cell .cell-f p{font-size:0.13rem; color:#aaa;padding-left:0.43rem;}
    .order-cell .cell-f span{font-size:0.11rem;}
</style>