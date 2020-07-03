import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSelection, removeSelection, getSortProducts } from '../redux/reducers/products'
import { removeFromCart } from '../redux/reducers/cart'

const CartProducts = () => {
  const dispatch = useDispatch()
  const list = useSelector((s) => s.cart.list)

  const selection = useSelector((s) => s.products.selection)
  const sortBy = useSelector((s) => s.products.sortBy)
  const base = useSelector((s) => s.products.base)
  const rates = useSelector((s) => s.products.rates)
  const getPrice = (id) => list.find((it) => it.id === id).price
  const sum = Object.entries(selection).reduce(
    (acc, [id, qty]) => acc + getPrice(id) * qty * (rates[base] || 1),
    0
  )

  return (
    <div>
      {getSortProducts(list, sortBy).map((card) => {
        return (
          <div key={card.id}>
            <section className="my-4">
              <div className="p-2 grid grid-cols-1 gap-4">
                <div className="flex flex-col sm:flex-row group w-auto items-stretch shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform rounded-md overflow-hidden text-gray-800">
                  <div className="overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.description}
                      className="object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out h-56 w-56 bg-gray-300"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-center flex-wrap">
                      <h2 className="text-2xl">{card.title}</h2>
                      <div className="flex justify-between items-center space-x-1">
                        <button
                          type="button"
                          className="bg-purple-700 text-white px-2 py-1 rounded-full uppercase text-sm whitespace-no-wrap"
                          onClick={() => {
                            dispatch(addSelection(card.id))
                          }}
                        >
                          Add
                        </button>
                        <div>{selection[card.id] || 0}</div>
                        <button
                          type="button"
                          className="bg-purple-700 text-white px-2 py-1 rounded-full uppercase text-sm whitespace-no-wrap"
                          onClick={() => {
                            if (selection[card.id] > 1) {
                              dispatch(removeSelection(card.id))
                            }
                            if (selection[card.id] === 1) {
                              dispatch(removeSelection(card.id))
                              dispatch(removeFromCart(card))
                            }
                          }}
                        >
                          Remove
                        </button>
                        <span className="bg-blue-600 text-white rounded px-4 py-2 w-15">
                          {card.price * selection[card.id]}
                        </span>
                      </div>
                    </div>
                    <p className="my-2 text-justify">{card.description}</p>
                    <span className="bg-blue-600 text-white rounded px-4 py-2 w-15">
                      {card.price}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      })}
      <div className="flex justify-center bg-blue-600 text-white rounded">
        {sum !== 0 && <div>Total price: {sum}</div>}
      </div>
    </div>
  )
}

CartProducts.propTypes = {}

export default React.memo(CartProducts)
