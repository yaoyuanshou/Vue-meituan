import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引用通用样式
import './assets/css/base.css'
import './assets/css/flex.css'

import server from './configs/server.js'
Vue.prototype.$baseUrl = server.baseUrl;//把服务器基础地址，作为实例属性，捆绑到了vue上

//引进vuerouter
import router from './plugins/router.js'

//引入animate.css
import 'animate.css'

//引入axios配置
import './plugins/axios.js'

//引入store
import store from './plugins/vuex.js'

import './common/stylus/index.styl'

import * as types from './store/types.js'

//获取本地token，添加到vuex
let local = window.localStorage.getItem('user')
if(local){
  store.commit(`user/${types.USER}`, JSON.parse(local))
}

Vue.prototype.$types = types

let vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

export default vm;
