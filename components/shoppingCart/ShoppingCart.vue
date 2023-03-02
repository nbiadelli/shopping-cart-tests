<template>
  <div
    class="z-40 fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300"
    :class="{ hidden: !isOpen }"
    data-testid="shopping-cart"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-medium text-gray-700">Your cart</h3>
      <button
        v-if="hasProducts"
        class="text-gray-400 focus:text-red-500"
        data-testid="clear-cart-button"
        @click="$cart.clearProducts()"
      >
        Clear cart
      </button>
      <button
        data-testid="close-button"
        class="text-gray-600 focus:outline-none"
        @click="close"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <hr class="my-3" />
    <cart-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      data-testid="cart-item"
    />
    <h3 v-if="!hasProducts" class="md:text-center text-neutral-300">
      Cart is empty
    </h3>
  </div>
</template>

<script>
import CartItem from '../cartItem/CartItem.vue'
export default {
  components: { CartItem },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    products: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      email: '',
    }
  },
  computed: {
    hasProducts() {
      return this.products.length > 0
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
