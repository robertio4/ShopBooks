import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR } from './types'

const getBooks = () => ({
  type: GET_BOOKS,
  payload: true,
})

const getBooksSuccess = books => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
})

const getBooksError = msgError => ({
  type: GET_BOOKS_ERROR,
  payload: msgError,
})

export default {
  getBooks,
  getBooksSuccess,
  getBooksError,
}
