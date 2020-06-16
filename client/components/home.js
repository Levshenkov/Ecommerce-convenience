import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Logs from './logs'
import Cart from './cart'
import Main from './main'
import Dummy from './dummy-view'

const Home = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/basket" component={() => <Cart />} />
        <Route exact path="/logs" component={() => <Logs />} />
        <Route exact path="/*" component={() => <Dummy />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
