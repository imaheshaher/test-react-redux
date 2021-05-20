import React from 'react'
import cakeContainer from './component/cakeShop'
import Header from './containers/Header'
import cakeShop from './redux/component/cakeShop'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

function App() {
  return (
    <div>
      <Router>
      <Header />

        <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route>404 not found</Route>

        </Switch>
      </Router>

    </div>
  )
}
export default App;