import { ADD_TO_CART, REMOVE_FROM_CART } from './types'

const addToCart = book => ({
  type: ADD_TO_CART,
  payload: book,
})

const removeFromCart = book => ({
  type: REMOVE_FROM_CART,
  payload: book,
})

export default {
  addToCart,
  removeFromCart,
}
