import Vue from 'vue'
import Vuex from 'vuex'

import tickets from '@/store/modules/tickets'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    tickets,
  }
})
