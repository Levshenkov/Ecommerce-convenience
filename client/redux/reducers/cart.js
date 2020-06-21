/* eslint-disable no-unreachable */
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.list.some((el) => el.id === action.item.id)) {
        return state
      }
      return {
        ...state,
        list: [...state.list, action.item]
      }
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        list: state.list.filter((el) => el !== action.item)
      }
    }

    default:
      return state
  }
}

export function addToCart(item) {
  return { type: ADD_TO_CART, item }
}

export function removeFromCart(item) {
  return { type: REMOVE_FROM_CART, item }
}

// {
//   ...state,
//   list: [...state.list, action.item]
// }
