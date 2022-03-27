import Vue from 'vue'
import Vuex from 'vuex'
import { users } from '@/api'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [
        // createPersisstedState()
    ],
    state: {
        usersList: [],
    },
    mutations: {
        setUser (state, users) {
            state.usersList = users.data.data
        }
    },
    actions: {
        async setUser ({commit}) {
            const usersList = await users()
            commit('setUser', usersList)
        },
    }
})