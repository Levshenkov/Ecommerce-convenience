import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex justify-between flex-wrap bg-gray-800 p-6">
      <div id="brand-name" className="flex justify-start flex-shrink-0 text-gray-400 mr-6">
        <Link to="/" className="mr-3">
          Shopping
        </Link>
      </div>
      <div className="flex justify-end text-gray-400">
        <div>
          <button type="button" className="mr-3">
            USD
          </button>
        </div>
        <div>
          <button type="button" className="mr-3">
            EUR
          </button>
        </div>
        <div>
          <button type="button" className="mr-8">
            CAD
          </button>
        </div>
        <div id="order-count" className="mr-3">
          <Link to="/basket">Basket</Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
