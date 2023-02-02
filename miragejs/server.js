import { Server } from 'miragejs'
import routes from './routes'

const config = (environment) => {
  const config = {
    routes,
  }

  return config
}

export function makeServer({ environment = 'development' } = {}) {
  return new Server(config(environment))
}
