import * as types from './types.js'

export default {
    [types.UPDATA_HEADER]: (state, payload) => state.bHeader = payload,
    [types.UPDATA_FOOTER]: (state, payload) => state.bFooter = payload,
    [types.UPDATA_LOADING]: (state, payload) => state.bLoading = payload,
}