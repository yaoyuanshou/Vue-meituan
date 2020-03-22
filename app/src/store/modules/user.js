import * as types from '../types.js'

const state = {
    user: {
        err: 1,
    }
}

const mutations = {
    [types.USER]: (state, payload) => state.user = payload,
}


export default {
    namespaced: true,//命名空间的模块，模块内部直接调用，外部需要命名空间（见组件）
    state, mutations
}
