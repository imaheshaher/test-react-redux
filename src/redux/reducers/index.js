//we have combine reducer 

import {combineReducers} from 'redux'
import {productReducer} from './productReducer'

const reducers = combineReducers({
    allProducts:productReducer
}) //it take objects


export default reducers
