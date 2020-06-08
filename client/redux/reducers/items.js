const axios = require('axios')

const SET_ITEMS = 'SET_ITEMS'
const IS_LOADED = 'IS_LOADED'

const initialState = {
  isLoaded: false,
  items: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
        isLoaded: true
      }
    case IS_LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded
      }
    default:
      return state
  }
}

export function setItems() {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    axios.get('/api/v1/data').then((it) => {
      const items = it.data.map((item) => item)
      dispatch({ type: SET_ITEMS, items })
    })
  }
}
