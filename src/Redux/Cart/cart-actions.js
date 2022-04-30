import * as actionTypes from './cart-types'

export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: id,
        }
    }
}

export const adjustQty = (id, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: id,
            qty: value
        }
    }
}