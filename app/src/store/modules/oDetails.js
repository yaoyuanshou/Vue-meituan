import * as types from '../types.js'
import {get} from '../service.js'

let state = {
    oDetails: {}
}

let mutations = {
    [types.ODETAILS]: (state, payload) => state.oDetails = payload,
}

let actions = {
    [types.ODETAILS]: ({commit, state}, {apiName, _id}) => {
        //商家
        get({apiName: apiName, type: 'ODETAILS', commit, _id: _id,})
    },
}

export default {
    namespaced: true,//命名空间的模块，模块内部直接调用，外部需要命名空间（见组件）
    state, mutations, actions
}