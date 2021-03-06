/* eslint-disable no-restricted-globals */
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setBase, getSortBy } from '../redux/reducers/products'

const Header = () => {
  const dispatch = useDispatch()
  const base = useSelector((s) => s.products.base)

  const rates = useSelector((s) => s.products.rates)
  const list = useSelector((s) => s.products.list)
  const selection = useSelector((s) => s.products.selection)
  const getPrice = (id) => list.find((it) => it.id === id).price
  const { pathname } = window.location
  const numberOfItems = Object.values(selection).reduce((acc, rec) => acc + rec, 0)
  const sum = Object.entries(selection).reduce((acc, [id, qty]) => {
    if (qty < 0) {
      return acc
    }
    const res = acc + getPrice(id) * qty * (rates[base] || 1)
    return res
  }, 0)

  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: 'CA$'
  }

  return (
    <nav className="flex justify-between flex-wrap bg-gray-800 p-6">
      <div id="brand-name" className="flex justify-start flex-shrink-0 text-gray-400 mr-6">
        <Link to="/" className="mr-3">
          Shopping
        </Link>
        <Link to="/logs" className="mr-3">
          Logs
        </Link>
      </div>
      <div className="flex justify-end text-gray-400">
        {pathname !== '/basket' && (
          <div>
            <button
              id="sort-price"
              type="button"
              className="mr-3 border-1"
              onClick={() => {
                dispatch(getSortBy('0-9'))
              }}
            >
              Sort by price
            </button>
          </div>
        )}
        {pathname !== '/basket' && (
          <div>
            <button
              id="sort-name"
              type="button"
              className="mr-10 border-1"
              onClick={() => {
                dispatch(getSortBy('a-z'))
              }}
            >
              Sort by name
            </button>
          </div>
        )}
        <div>
          {['CAD', 'USD', 'EUR'].map((it) => {
            return (
              <button
                key={it}
                type="button"
                className={`mx-4 ${base === it ? 'underline' : ''}`}
                onClick={() => {
                  dispatch(setBase(it))
                }}
              >
                {it}
              </button>
            )
          })}
        </div>
        {pathname !== '/basket' && (
          <div id="order-count" className="mr-3 flex flex-row pl-6">
            <img className="w-6 h-6" src="https://img.icons8.com/fluent/48/000000/shopping-cart.png" alt="cart"/>
            <Link className="pl-2" to="/basket">
              {(!isNaN(sum) && sum.toFixed(2)) || '0.00'} {symbols[base]}
            </Link>
          </div>
        )}
        {pathname !== '/basket' && (<div className="pl-5 pr-5">Items in cart: {numberOfItems || 0}</div>)}
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
