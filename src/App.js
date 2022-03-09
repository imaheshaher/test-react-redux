import {React,useState,useEffect} from 'react'
import cakeContainer from './component/cakeShop'
import Header from './containers/Header'
import cakeShop from './redux/component/cakeShop'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'
import ReduxContain from './component/ReduxContain'
import {Redirect} from "react-router-dom"
import LoginComponent from './component/LoginComponent'
import { useHistory } from 'react-router-dom'
import { PrivateRoute } from './component/PrivateRoute'

function App() {
  const [token,setToken] = useState(localStorage.getItem("token"))
  const getToken = () => {
    let token = localStorage.getItem("token")
    return token

  }
  let history  = useHistory()
  
  useEffect(() => {
    
    if(!token){
    
      // history.push("/login")
    }
  }, [])
  
  return (
    <div>
      <Router>
      <Header />

        <Switch>
          <PrivateRoute path="/" exact component={ProductListing} />
        {/* <Route path="/" exact component={ProductListing} /> */}
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route path="/redux" exact component={ReduxContain} />
        <Route path="/login" exact component={LoginComponent} />
        <Route>404 not found</Route>

        </Switch>
      </Router>

    </div>
  )
}
export default App;