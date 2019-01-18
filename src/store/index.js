import Vuex from 'vuex'

import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed
    productsCount() {
      // ...
    }
  },

  actions: {
    fetchProducts () {
      // make the call to api

      // run setProducts mutations
    }
  },

  mutations: {
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})

