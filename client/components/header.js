import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setBase, getSortProducts } from '../redux/reducers/products'

const Header = () => {
  const dispatch = useDispatch()
  const base = useSelector((s) => s.products.base)
  const rates = useSelector((s) => s.products.rates)
  const list = useSelector((s) => s.products.list)
  const selection = useSelector((s) => s.products.selection)
  const getPrice = (id) => list.find((it) => it.id === id).price
  const numberOfItems = Object.values(selection).reduce((acc, rec) => acc + rec, 0)
  const sum = Object.entries(selection).reduce(
    (acc, [id, qty]) => acc + getPrice(id) * qty * (rates[base] || 1),
    0
  )
  return (
    <nav className="flex justify-between flex-wrap bg-gray-800 p-6">
      <div id="brand-name" className="flex justify-start flex-shrink-0 text-gray-400 mr-6">
        <Link to="/" className="mr-3">
          Shopping
        </Link>
      </div>
      <div className="flex justify-end text-gray-400">
        <div>
          <button
            id="sort-price"
            type="button"
            className="mr-3 border-1"
            onClick={() => dispatch(getSortProducts(list, '0-9'))}
          >
            Sort by price
          </button>
        </div>
        <div>
          <button
            id="sort-name"
            type="button"
            className="mr-10 border-1"
            onClick={() => dispatch(getSortProducts(list, 'a-z'))}
          >
            Sort by name
          </button>
        </div>
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
        <div className="pl-5 pr-5">{numberOfItems}</div>
        <div id="order-count" className="mr-3">
          <Link to="/basket">Total price: {sum.toFixed(2)}</Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)