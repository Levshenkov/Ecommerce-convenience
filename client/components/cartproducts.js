import React from 'react'
import { useSelector } from 'react-redux'

const CartProducts = () => {
  const list = useSelector((s) => s.cart.list)
  // const productsList = useSelector((s) => s.products.list)

  const ArrListID = list.filter((item, index) => {
    return list.indexOf(item) === index
  })

  return (
    <div>
      {ArrListID.map((card) => {
        return (
          <div key={card.id}>
            <section className="my-4">
              <div className="p-2 grid grid-cols-1 gap-4">
                <div className="flex flex-col sm:flex-row group w-auto items-stretch shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform rounded-md overflow-hidden text-gray-800">
                  <div className="overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.description}
                      className="object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out h-56 w-full bg-gray-300"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-center flex-wrap">
                      <h2 className="text-2xl">{card.title}</h2>
                      <div className="space-x-1">
                        <button
                          type="button"
                          className="bg-purple-700 text-white px-2 py-1 rounded-full uppercase text-sm whitespace-no-wrap"
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          className="bg-purple-700 text-white px-2 py-1 rounded-full uppercase text-sm whitespace-no-wrap"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="my-2 text-justify">{card.description}</p>
                    <button
                      type="button"
                      className="flex space-x-1 bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2"
                    >
                      Call to action
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      })}
    </div>
  )
}

CartProducts.propTypes = {}

export default React.memo(CartProducts)
