<template>
    <div class="o-d">
        <back nav="订单详细" bgColor="#fff"/>
        <div class="f">
            <ul>
                <li>
                    <h3>订单状态</h3>
                    <p>{{$store.state.oDetails.oDetails.status}}</p>
                </li>
                <li>
                    <h3>订单号</h3>
                    <p>{{$store.state.oDetails.oDetails.delId}}</p>
                </li>
                <li>
                    <h3>下单时间</h3>
                    <p>{{$store.state.oDetails.oDetails.time | date}}</p>
                </li>
                <li>
                    <h3>买家留言</h3>
                    <p>{{$store.state.oDetails.oDetails.leave}}</p>
                </li>
            </ul>
            <h2>收货信息</h2>
            <ul>
                <li>
                    <h3>收货人</h3>
                    <p>{{$store.state.oDetails.oDetails.user}}&nbsp;&nbsp;&nbsp;{{$store.state.oDetails.oDetails.uPhone}}</p>
                </li>
                <li>
                    <h3>收货地址</h3>
                    <p>{{$store.state.oDetails.oDetails.uPlace}}</p>
                </li>
            </ul>
            <h2>骑手信息</h2>
            <ul>
                <li>
                    <h3>骑手</h3>
                    <p>{{$store.state.oDetails.oDetails.pUsr}}</p>
                </li>
                <li>
                    <h3>电话</h3>
                    <p>{{$store.state.oDetails.oDetails.pPhone}}</p>
                </li>
            </ul>
            <h2>订单详细</h2>
            <dl>
                <dt>
                    <img :src="$store.state.oDetails.oDetails.nImg" alt="">
                    <p>{{$store.state.oDetails.oDetails.name}}</p>
                </dt>
                <dd v-for="(item, index) in $store.state.oDetails.oDetails.list" :key="index">
                    <img :src="item.img" alt="">
                    <div>
                        <p>{{item.name}}</p>
                        <p>规格：{{item.p}}</p>
                        <p>
                            <span>X{{item.num}}</span>
                            <span>{{item.pay | pay}}</span>
                        </p>
                    </div>
                </dd>
            </dl>
            <div class="all"></div>
            <div class="btn" @click="$router.replace('/')">再来一单</div>
        </div>
    </div>
</template>

<script>
    import back from '../components/back'    
    export default {
        name: 'order-details',
        components: {
            back
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
        mounted() {
            this.$store.dispatch(`oDetails/${this.$types.ODETAILS}`,{_id: this.$route.params._id, apiName: this.$route.query.apiName})
        },
        data() {
            return {
                
            }
        },
    }
</script>
<style scoped>
    .o-d{display: flex;flex-flow:column;height:100%;}
    .o-d .f{flex:1;overflow: auto;}
    .o-d ul{display: flex;flex-flow: column;}
    .o-d h2{font-size: 0.15rem;padding:0 0.12rem;height:0.45rem;line-height: 0.45rem;}
    .o-d li{display: flex;align-items: center;padding:0 0.12rem;border-bottom:1px solid #f7f7f7;background:#fff;height:0.58rem;}
    .o-d li h3{font-size:0.13rem;color:#b8b8b8;width:0.85rem;}
    .o-d li p{font-size:0.14rem;color:#000;}
    .o-d dl{background:#fff;}
    .o-d dl dt{height:0.56rem;display: flex;background: #fff;align-items: center;}
    .o-d dl dt img{width:0.3rem;height:0.3rem;margin:0 0.12rem;}
    .o-d dl dt p{font-size: 0.15rem;}
    .o-d dl dd{display: flex;padding:0 0.17rem 0 0.12rem;margin-bottom:0.1rem;background:#f7f7f7}
    .o-d dl dd img{width:0.6rem;height:0.6rem;margin-right:0.15rem;}
    .o-d dl dd div{display: flex;flex-flow:column;flex: 1;justify-content: space-between;padding:0.05rem 0;}
    .o-d dl dd div p{display:flex;justify-content: space-between;}
    .o-d dl dd div p:nth-child(1){font-size: 0.16rem;}
    .o-d dl dd div p:nth-child(2){font-size: 0.12rem;color:#c1c1c1}
    .o-d dl dd div p:nth-child(3){font-size: 0.12rem;color:#c1c1c1}
    .o-d .btn{text-align: center;margin:0.18rem 0;border-top:1px solid #f7f7f7;background:#fff;padding:0.18rem 0;font-size: 0.16rem;}
</style>