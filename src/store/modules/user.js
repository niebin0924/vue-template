// import * as types from '@store/mutation-types'
import * as types from '../mutation-types'

const state = {
    userInfo: {
        token: '1111'
    }
}

const getters = {
    userInfo: state => state.userInfo
}

const actions = {

}

const mutations = {
    [types.USERINFO](state, data) {
        state.userInfo = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}