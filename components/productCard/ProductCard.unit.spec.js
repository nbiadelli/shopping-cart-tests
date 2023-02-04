import { mount } from '@vue/test-utils'
import { CartManager } from '../../managers/CartMenagers'
import ProductCard from './ProductCard.vue'
import { makeServer } from '@/miragejs/server'

describe('ProductCard - unit', () => {
  let server

  beforeEach(() => {
    server = makeServer({ environment: 'test' })
  })

  afterEach(() => {
    server.shutdown()
  })

  const mountProductCard = () => {
    const product = server.create('product', {
      title: 'Bolo',
      price: '$23.00',
      image: 'https://loremflickr.com/640/480/food?lock=41517',
    })
    const cartManager = new CartManager()

    const wrapper = mount(ProductCard, {
      propsData: {
        product,
      },
      mocks: {
        $cart: cartManager,
      },
    })

    return {
      wrapper,
      product,
      cartManager,
    }
  }

  it('should match snapshot', () => {
    const { wrapper } = mountProductCard()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should mount the component', () => {
    const { wrapper } = mountProductCard()

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.text()).toContain('Bolo')
    expect(wrapper.text()).toContain('$23.00')
  })

  it('should add item to cartState on button click', async () => {
    const { wrapper, cartManager, product } = mountProductCard()
    const spy1 = jest.spyOn(cartManager, 'open')
    const spy2 = jest.spyOn(cartManager, 'addProduct')

    await wrapper.find('button').trigger('click')

    expect(spy1).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledTimes(1)
    expect(spy2).toHaveBeenCalledWith(product)
  })
})
