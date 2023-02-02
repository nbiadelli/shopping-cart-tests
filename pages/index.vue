<template>
  <main class="my-8">
    <product-search />
    <div class="container mx-auto px-6">
      <span
        data-testid="total-quantity-label"
        class="mt-3 text-sm text-gray-500"
      ></span>
      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
      >
        <product-card
          v-for="product in list"
          :key="product.id"
          :product="product"
          data-testid="product-card"
        />
      </div>
    </div>
    <h3 class="text-center text-2xl"></h3>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import ProductSearch from '@/components/ProductSearch'

export default {
  components: { ProductCard, ProductSearch },
  data() {
    return {
      products: [],
      errorMessage: '',
      searchTerm: '',
    }
  },
  computed: {
    list() {
      if (this.searchTerm !== '') {
        return this.products.filter(({ title }) => {
          return title.includes(this.searchTerm)
        })
      }
      return this.products
    },
    quantityLabel() {
      const {
        list: { length },
      } = this

      return length === 1 ? `${length} Product` : `${length} Products`
    },
  },
  async created() {
    try {
      this.products = (await this.$axios.get('/api/products')).data.products
    } catch (error) {
      this.errorMessage = 'Problemas ao carregar a lista!'
    }
  },
  methods: {
    setSearchTerm({ term }) {
      this.searchTerm = term
    },
  },
}
</script>
