/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */

import user from './user'
import message from './message'
import product from './product'

export default {
  ...user,
  ...message,
  ...product,
}
