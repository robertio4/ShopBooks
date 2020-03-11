import { call, put, takeLatest } from 'redux-saga/effects'

import clientAxios from '../../config/axios'
import { GET_BOOKS } from './types'
import actions from './actions'

export function* getBooksSaga() {
  try {
    // Petición a la API
    const response = yield call(clientAxios, '/book_suggestions')

    // Actualizar el state con los datos
    yield put(actions.getBooksSuccess(response.data))
  } catch (e) {
    // Actualizar state con el error
    yield put(actions.getBooksError(e.message))
  }
}

function* saga() {
  yield takeLatest(GET_BOOKS, getBooksSaga)
}

export default saga
