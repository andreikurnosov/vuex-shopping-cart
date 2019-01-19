import Vuex from 'vuex'

import Vue from 'vue'

import products from './modules/products'

import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  }
})

