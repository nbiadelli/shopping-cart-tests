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
        <product-card />
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
    }
  },
}
</script>
