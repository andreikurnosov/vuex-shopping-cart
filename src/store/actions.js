import shop from '@/api/shop'

export default {
    fetchProducts({ commit }) {
      // make the call to api
      // run setProducts mutations
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addProductToCart({ state, getters, commit }, product) {
      if (getters.productIsInStock(product)) {
        //find cart item
        const cartItem = state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          //push product to cart
          commit('pushProductToCart', product.id)
        } else {
          // increment item to quantity
          commit('incrementItemQuantity', cartItem)
        }
        commit('decrementProductInventory', product)
      }
    },

    checkout({ state, commit }) {
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        },
      )
    }
  }
