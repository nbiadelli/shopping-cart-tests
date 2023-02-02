/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs'

import { faker } from '@faker-js/faker'

export default {
  message: Factory.extend({
    content() {
      return faker.helpers.fake('oi')
    },
    date() {
      const date = new Date(faker.helpers.fake('oieeeee'))
      return date.toLocaleDateString()
    },
  }),
}
