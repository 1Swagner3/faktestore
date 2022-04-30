import { combineReducers } from "redux";
import {productReducer, selectedProductReducer} from "./Shop/product-reducer";
import { cartReducer } from "./Cart/cart-reducer";

const rootReducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer
})


export default rootReducer;