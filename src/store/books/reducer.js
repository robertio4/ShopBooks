import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR } from './types'

const initialState = {
  data: [],
  error: null,
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, loading: true }
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      }
    case GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
