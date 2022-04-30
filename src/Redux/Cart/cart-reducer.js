import * as actionTypes from './cart-types'

const INTIAL_STATE = {
    cart: []
}

export const cartReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) => 
                        item.id === action.payload.id
                        ? {...item, qty: item.qty + 1}
                        : item
                    )
                    : [...state.cart, {...action.payload, qty: 1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            }
        default:
            return state
    }
}