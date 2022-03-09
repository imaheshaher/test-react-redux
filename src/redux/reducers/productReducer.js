import { ActionType } from "../constants/action-type";

//reducer always take intial state and action
const initialState = {
    products:[],
    

}
let todo= [
    {title:"First Task"},
    {title:"Second Task"}

]
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


export const todoReducer=(state=todo,action) => {
    switch(action.type){
        case ActionType.ADD_TODO:
            return [
               action.payload,
                ...state
              ]
        case ActionType.REMOVE_TODO:
            return state.filter((obj)=>obj.title!==action.payload.title)
        case "UPDATE_TASK":
            return state.map((obj,index) => {
                if(index==action.payload.index ){
                    return action.payload
                }
            })
        default:
            return state    
    }
   
}