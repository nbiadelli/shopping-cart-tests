if (process.env.NODE_ENV === 'development' && process.env.USE_API) {
  require('@/miragejs/server').makeServer()
}
