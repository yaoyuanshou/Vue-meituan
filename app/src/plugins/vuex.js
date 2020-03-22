import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import state from '../store/state.js'
import mutations from '../store/mutations.js'
import home from '../store/modules/home.js'
import home2 from '../store/modules/home2.js'
import breakfast from '../store/modules/breakfast.js'
import takeaway from '../store/modules/takeaway.js'
import user from '../store/modules/user.js'
import oDetails from '../store/modules/oDetails'


const store = new Vuex.Store({
    state, mutations,
    modules: {
        home, breakfast, takeaway, user, home2, oDetails
    }
})

export default store