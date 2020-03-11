import { all } from 'redux-saga/effects'
import books from './books/saga'
//import cart from './cart/saga';

export default function* sagas() {
  yield all([books()])
}
