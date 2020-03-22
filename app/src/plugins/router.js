import Vue from 'vue'
import VueRouter from 'vue-router'//引入vue-router

Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import User from '../pages/User.vue'
import Look from '../pages/Look.vue'
import Order from '../pages/Order.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import SetUp from '../pages/SetUp.vue'
import Details from '../pages/Details.vue'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'
import OrderDetails from '../pages/OrderDetails.vue'
import noPage from '../pages/noPage.vue'



let routes = [
    {path:'/home', component: Home},
    {path:'/user', component: User, children: [
        {path:'set', component: SetUp, name:'set'},
    ]},
    {path:'/order', component: Order},
    {path:'/look', component: Look},
    {path:'/login', component: Login, name:'login'},
    {path:'/reg', component: Reg},
    {path:'/oDetails/:_id', component: OrderDetails},
    {path:'/details/:_id', component: Details, redirect:'/details/:_id/goods', children:[
        {path:"goods",component:goods,name:'goods'},
        {path:"ratings",component:ratings,name:'ratings'},
        {path:"seller",component:seller,name:'seller'},
    ]},
    
    {path:'/', redirect: '/home'},
    {path:'*', component: noPage}
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass:"active"
})

export default router;