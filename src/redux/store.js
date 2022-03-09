// import {createStore,applyMiddleware,compose} from 'redux'
// import reducers from "./reducers/index"
// // import cakeReducer from './cakes/cakeReducer'
// import * as reduxThunk from "redux-thunk";
// // const store = createStore(cakeReducer);
// import Thunk from "redux-thunk";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers,{},composeEnhancers( applyMiddleware(Thunk)))  //{} this for middlewar as redux thunk
import {createStore,applyMiddleware,compose} from 'redux'
import reducers from "./reducers/index"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,{})  //{} this for middlewar as redux thunk


export default store