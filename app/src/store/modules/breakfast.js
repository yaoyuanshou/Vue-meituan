import * as types from '../types.js'

import {get} from '../service.js'

const state = {
    breakfast: [],
}

const mutations = {
    [types.BREAKFAST]: (state, payload) => state.breakfast = payload,
}

const actions = {
    [types.BREAKFAST]: ({commit, state}, payload) => {
        //早餐
        get({apiName: 'breakfast', type: 'BREAKFAST', commit, params:{_limit:10}})
    },
}

export default {
    namespaced: true,//命名空间的模块，模块内部直接调用，外部需要命名空间（见组件）
    state, mutations, actions
}