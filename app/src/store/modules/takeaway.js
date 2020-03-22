import * as types from '../types.js'
import {get} from '../service.js'


const state = {
    takeaway: [],
}

const mutations = {
    [types.TAKEAWAY]: (state, payload) => state.takeaway = payload,
}

const actions = {
    [types.TAKEAWAY]: ({commit, state}, payload) => {
        //外卖
        get({apiName: 'takeaway', type: 'TAKEAWAY', commit, params:{_limit:10}})
    },
}

export default {
    namespaced: true,//命名空间的模块，模块内部直接调用，外部需要命名空间（见组件）
    state, mutations, actions
}