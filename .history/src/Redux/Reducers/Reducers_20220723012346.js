import { ActionType } from '../ActionTypes/ActionContstant'

//initializing the state here
const initProdState = {
    products: []
}

console.log(initProdState)
export const setProductReducers = (state = initProdState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {
                ...state,
                products: payload 
            };
        
        default:
            return state;
    }
}