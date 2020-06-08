import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Logs from './logs'
import Basket from './basket'
import Main from './main'
import Dummy from './dummy-view'

const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/basket" component={() => <Basket />} />
        <Route exact path="/logs" component={() => <Logs />} />
        <Route exact path="/*" component={() => <Dummy />} />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
