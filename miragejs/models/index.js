/*
 * Mirage JS guide on Models: https://miragejs.com/docs/data-layer/models
 */

import { Model, hasMany, belongsTo } from 'miragejs'

export default {
  user: Model.extend({
    messages: hasMany(),
  }),
  messages: Model.extend({
    user: belongsTo(),
  }),
  product: Model,
}
