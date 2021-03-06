import * as actionTypes from './shop-types'

const INTIAL_STATE = {
    products:[]
}

export const productReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.SET_PRODUCTS:
            return {
                ...state, 
                products: action.payload
            };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, action) => {
    switch(action.type){
        case actionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload}
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}

