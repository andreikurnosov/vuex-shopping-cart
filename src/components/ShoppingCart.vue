<template>

  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products">
        {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ cartTotal | currency }}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState ({
      checkoutStatus: 'checkoutStatus'
      }),
    ...mapGetters ({
      cartTotal: 'cartTotal',
      products: 'cartProducts'
    })
  },
  methods: {
    ...mapActions (['checkout'])
  }
}
</script>


<style scoped>

</style>
