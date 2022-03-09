//we have combine reducer 

import {combineReducers} from 'redux'
import { selectedProduct } from '../actions/productActions'
import {productReducer, selectedProductReducer, todoReducer} from './productReducer'

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    todoReducer:todoReducer
}) //it take objects


export default reducers
