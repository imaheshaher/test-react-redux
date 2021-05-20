import {createStore} from 'redux'
import reducers from "./reducers/index"
// import cakeReducer from './cakes/cakeReducer'
// const store = createStore(cakeReducer);

const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  //{} this for middlewar as redux thunk



export default store