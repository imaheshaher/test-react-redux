import { ActionType } from "../constants/action-type"
export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    }
}


export const addTODOItem = (data) => {
    
    return {
        type:ActionType.ADD_TODO,
        payload:data
    }
}
export const deleteTask = (data) => {
    
    return {
        type:ActionType.REMOVE_TODO,
        payload:data
    }
}

export const updaateTODO = (data) => {
    alert(data)
    return {
        type:"UPDATE_TASK",
        payload:data
    }
}
//action always return object key will type 