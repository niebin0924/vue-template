// import * as types from '@store/mutation-types'
import * as types from '../mutation-types'

const state = {
    cityName: ''
}

const getters = {
    cityName: state => state.cityName
}

const actions = {

}

const mutations = {
    [types.CITYNAME](state, data) {
        state.cityName = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}