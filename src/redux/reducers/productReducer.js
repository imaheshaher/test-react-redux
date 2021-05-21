import { ActionType } from "../constants/action-type";

//reducer always take intial state and action
const initialState = {
    products:[]
}
export const productReducer = (state=initialState,action) =>{
    switch (action.type) {
        case ActionType.SET_PRODUCTS:
            return {...state,products:action.payload}
    
        default:
            return state;
    }
}

export const selectedProductReducer = (state={},action) =>{
    switch (action.type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state,...action.payload}
    
        default:
            return state;
    }
}
