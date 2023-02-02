import { Factory } from 'miragejs'

import { faker } from '@faker-js/faker'

export default {
  product: Factory.extend({
    title() {
      return faker.lorem.words(2)
    },
    price() {
      return faker.commerce.price()
    },
    image() {
      return faker.image.food()
    },
  }),
}
