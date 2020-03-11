import { combineReducers } from 'redux'
import books from './books/reducer'
import cart from './cart/reducer'

export default combineReducers({
  books,
  cart,
})
