import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedMenu: 0,
    },
    mutations: {
        selectMenu: (state, payload) => {
            payload = Math.min(payload, 2)
            payload = Math.max(payload, 0)
            state.selectedMenu = payload
        },
    },
    actions: {
    },
    getters: {
        selectedMenu: state => state.selectedMenu,
    }
})
