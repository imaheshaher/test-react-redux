//we have combine reducer 

import {combineReducers} from 'redux'
import { selectedProduct } from '../actions/productActions'
import {productReducer, selectedProductReducer} from './productReducer'

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
}) //it take objects


export default reducers
