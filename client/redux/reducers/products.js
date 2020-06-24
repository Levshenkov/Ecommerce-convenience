const GET_PRODUCTS = '@@GET_PRODUCTS'
const ADD_TO_SELECTION = 'ADD_TO_SELECTION'
const REMOVE_FROM_SELECTION = 'REMOVE_FROM_SELECTION'
const GET_RATES = '@@GET_RATES'
const SET_BASE = 'SET_BASE'
const SET_SORT_BY = 'SET_SORT_BY'

const initialState = {
  list: [],
  selection: {},
  rates: {},
  base: 'EUR',
  sortBy: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SELECTION:
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.id]: (state.selection[action.id] || 0) + 1
        }
      }

    case REMOVE_FROM_SELECTION: {
      const newSelection = {
        ...state.selection,
        [action.id]: state.selection[action.id] - 1
      }
      if (newSelection[action.id] <= 0) {
        delete newSelection[action.id]
      }
      return {
        ...state,
        selection: newSelection
      }
    }

    case SET_BASE:
      return { ...state, base: action.base }

    case GET_RATES:
      return { ...state, ...action.rates }

    case GET_PRODUCTS:
      return { ...state, list: action.list }

    case SET_SORT_BY:
      return { ...state, sortBy: action.sortBy }

    default:
      return state
  }
}

export function addSelection(id) {
  return { type: ADD_TO_SELECTION, id }
}

export function removeSelection(id) {
  return { type: REMOVE_FROM_SELECTION, id }
}
export function setBase(base) {
  return { type: SET_BASE, base }
}

export function getRates() {
  return (dispatch) => {
    fetch('/api/v1/rates')
      .then((res) => res.json())
      .then((rates) => {
        dispatch({ type: GET_RATES, rates })
      })
  }
}
export function getProducts() {
  return (dispatch) => {
    fetch('/api/v1/products')
      .then((res) => res.json())
      .then((list) => {
        dispatch({ type: GET_PRODUCTS, list })
      })
  }
}

export function getSortProducts(list, sortBy) {
  if (sortBy === '0-9') {
    return [...list].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  }
  if (sortBy === 'a-z') {
    return [...list].sort((a, b) => a.title.localeCompare(b.title))
  }
  return list
}

export function getSortBy(sortBy) {
  return { type: SET_SORT_BY, sortBy }
}
