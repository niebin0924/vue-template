import Vue from 'vue'
import Vuex from 'vuex'
import house from './modules/house'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    house,
    user
  },
  strict: true
})
