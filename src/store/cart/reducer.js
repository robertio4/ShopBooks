import { ADD_TO_CART, REMOVE_FROM_CART } from './types'

export const initialState = {
  data: {
    id: 0,
    items: [],
  },
  error: null,
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        data: {
          ...state.data,
          id: state.data.id,
          items: [...state.data.items, action.payload],
        },
      }
    }
    case REMOVE_FROM_CART: {
      debugger
      return {
        ...state,
        data: {
          ...state.data,
          id: state.data.id,
          items: state.data.items.filter(item => item.id !== action.payload.id),
        },
      }
    }
    default:
      return state
  }
}

export default reducer
