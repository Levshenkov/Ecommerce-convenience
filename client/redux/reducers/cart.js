const ADD_TO_CART = 'ADD_TO_CART'
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        list: [...state.list, action.item]
      }
    default:
      return state
  }
}

export function addToCart(item) {
  return { type: ADD_TO_CART, item }
}
