import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './header'
import Items from './item'
import { getProducts, getRates, getLogs } from '../redux/reducers/products'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getRates())
    dispatch(getLogs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Header />
      <Items />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
