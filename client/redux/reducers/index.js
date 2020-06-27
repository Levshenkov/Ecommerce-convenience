import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import logs from './logs'
import cart from './cart'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    cart,
    logs
  })

export default createRootReducer
