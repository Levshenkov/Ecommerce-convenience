import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSelection, removeSelection, getSortProducts } from '../redux/reducers/products'
import { addToCart } from '../redux/reducers/cart'

const Items = () => {
  const dispatch = useDispatch()
  const list = useSelector((s) => s.products.list)
  const selection = useSelector((s) => s.products.selection)
  const base = useSelector((s) => s.products.base)
  const rates = useSelector((s) => s.products.rates)
  const sortBy = useSelector((s) => s.products.sortBy)

  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: 'CA$'
  }

  return (
    <div className="flex flex-wrap content-center justify-center">
      {getSortProducts(list, sortBy).map((card) => {
        return (
          <div
            className="border-2 flex flex-col border-solid border-black w-64 h-64 p-2 m-4"
            key={card.id}
          >
            <div className="flex justify-center">
              <img className="h-32 w-full" src={card.image} alt={card.title} />
            </div>
            <div>{card.title} </div>
            <div className="pt-2">
              {(card.price * (rates[base] || 1)).toFixed(2)} {symbols[base]}
            </div>

            <div className="flex p-10 justify-between">
              <button
                type="button"
                onClick={() => {
                  dispatch(removeSelection(card.id))
                }}
              >
                -
              </button>
              <div>{selection[card.id] || 0}</div>
              <button
                type="button"
                onClick={() => {
                  dispatch(addSelection(card.id))
                  dispatch(addToCart(card))
                }}
              >
                +
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Items.propTypes = {}

export default React.memo(Items)
