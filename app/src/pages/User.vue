<template>
    <div class="user">
        <transition
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOutLeft"
        >
            <router-view></router-view>
        </transition>
        <div class="headers">
            <section>
                
                <router-link :to="{name: 'set'}">
                    <div class="set"></div>
                </router-link>
                <div class="news" @click="$router.push('/jinx')"></div>
            </section>
            <dl @click="$router.push('/jinx')">
                <dt :style="{backgroundImage: `url(${$baseUrl}${$store.state.user.user.data.icon})`}"></dt>
                <dd>{{$store.state.user.user.data.nikename}}</dd>
            </dl>
        </div>
        <div class="content">
             <aside>
                <UserCell img="img/heart.png" p="商品收藏"/>
                <UserCell img="img/shop.png" p="店铺关注"/>
                <UserCell img="img/shopping.png" p="我的购物车"/>
                <UserCell img="img/balance.png" p="我的余额"/>
                <UserCell img="img/place.png" p="收货地址"/>
                <UserCell img="img/foot.png" p="我的足迹"/>
             </aside>
             <aside>
                <UserCell img="img/help.png" p="帮助中心"/>
                <UserCell img="img/00.png" p="联系客服"/>
             </aside>
        </div>
    </div>
</template>

<script>
    import UserCell from '../components/user-cell'
    import store from '../plugins/vuex.js'      
    export default {
        beforeRouteEnter (to, from, next) {
            // let local = window.localStorage.getItem('user')
            /* let token = store.state.user.token
            token ? token : ''

            if(!token){
                next('/login')
                return
            } */

            axios({
                url: '/api/user',
            }).then(
                res => {
                    if(res.data.err == 0){
                        next(_this => _this.user = res.data.data);
                    }else{
                        next('/login')
                    }
                }
            )
        },
        name:'User',
        components: {
            UserCell
        },
        data() {
            return {
                user: {}
            }
        },
        methods: {
        },
    }
</script>
<style scoped>
    .user{display:flex;flex-flow: column;height:100%;position: absolute;width: 100%;}
    .user .headers{height:1.2rem;background:#ffc74a;display: flex;flex-flow: column;}
    .user .headers section{display: flex;justify-content:flex-end;padding-top:0.13rem;}
    .user .headers section div{width:0.19rem;height:0.19rem;margin-right:0.1rem}
    .user .headers section .set{background:url(../assets/img/set.png) center/0.19rem 0.19rem}
    .user .headers section .news{background:url(../assets/img/news.png) center/0.19rem 0.19rem}
    .user .headers dl{display:flex; align-items: center;margin:0.26rem 0 0 0.14rem}
    .user .headers dl dt{width:0.45rem;height:0.45rem; background-image:url(/img/wy_28.png); border-radius: 50%;border:1px solid #fff;background-size:100%;overflow: hidden;}
    .user .headers dl dd{margin-left:0.07rem;color:#fff;font-size: 0.15rem;}

    .user .content{flex: 1;background: #f7f7f7;overflow: auto;margin-bottom: 0.49rem;}
    .user .content aside:nth-child(1){margin-bottom:0.32rem}
</style>