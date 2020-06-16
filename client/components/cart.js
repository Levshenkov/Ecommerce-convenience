import React from 'react'
import Header from './header'
import CartProducts from './cartproducts'

const Cart = () => {
  return (
    <div>
      <Header />
      <CartProducts />
    </div>
  )
}

Cart.propTypes = {}

export default React.memo(Cart)
