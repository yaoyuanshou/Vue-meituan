import * as types from '../types.js'
import {get} from '../service.js'


const state = {
    home2:[],
}

const mutations = {
    [types.HOME2]: (state, payload) => state.home2 = payload,
}

const actions = {
    [types.HOME2]: ({commit, state}, payload) => {
        //商家
        get({apiName: 'home', type: 'HOME2', commit, params:{_limit:10}})
    },

}

export default {
    namespaced: true,//命名空间的模块，模块内部直接调用，外部需要命名空间（见组件）
    state, mutations, actions
}