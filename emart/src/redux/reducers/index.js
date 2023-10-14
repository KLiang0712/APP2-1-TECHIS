import { combineReducers } from "redux";

import { cartReducer, selectedProductReducer } from "./handleCart";

export const reducers = combineReducers({
    allProducts: cartReducer,
    product : selectedProductReducer,       
}); 