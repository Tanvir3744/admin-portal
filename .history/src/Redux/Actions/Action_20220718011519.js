
import { ActionType } from '../ActionTypes/ActionContstant';

//action for setProduct 
export const setProductsAction = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload : products
    }
}
//after changing the remote origin
//action for selected product
export const setSelectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
    }
}

