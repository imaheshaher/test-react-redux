const redux = require('redux')

const createStore = redux.createStore 
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


//Action Function
function byCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIcecream() {
    return {
        type:BUY_ICECREAM
    }
}
//store or State 
const intialState = {
    noOfCake:10,
    noOfIceCream:15
}


//Reducer 
//(previousState,action) => newState

const reducer =(state = intialState,action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,                      //spreade operator which make the copy of state object
                noOfCake:state.noOfCake-1      //and only change the specific property
            }

        case BUY_ICECREAM: 
        return {
            ...state,
            noOfIceCream:state.noOfIceCream-1
        }
        default: return state
    }
}


const store = createStore(reducer)

console.log("Intial state",store.getState());
const unsubscribe = store.subscribe(()=> console.log("Updated state",store.getState()))
store.dispatch(byCake())
store.dispatch(byCake())
store.dispatch(byCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()