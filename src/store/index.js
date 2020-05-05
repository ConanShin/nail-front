import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedMenu: 0,
        selectedDate: null,
        timetable: null
    },
    mutations: {
        selectMenu: (state, payload) => {
            payload = Math.min(payload, 2)
            payload = Math.max(payload, 0)
            state.selectedMenu = payload
        },
        resetSelection: state => {
            state.selectedDate = null
            state.timetable = null
        },
        selectedDate: (state, payload) => state.selectedDate = payload,
        timetable: (state, payload) => state.timetable = payload
    },
    actions: {
        readTimeTable: (store, date) => {
            store.commit('selectedDate', date.format('MMM DD'))
            const timetable = [
                {
                    start: moment().set({
                        year: date.year(),
                        month: date.month(),
                        date: date.date(),
                        hour: 11,
                        minute: 40
                    }),
                    duration: 60,
                    operation: '젤네일'
                }
            ]
            store.commit('timetable', timetable)
        }
    },
    getters: {
        selectedMenu: state => state.selectedMenu,
        selectedDate: state => state.selectedDate,
        timetable: state => state.timetable
    }
})
