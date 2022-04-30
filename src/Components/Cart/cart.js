import React from "react";
import { useSelector } from "react-redux";
import CartDetail from "../CartDetail/cartDetail";
import './cart.css'

const Cart = () => {

    const products = useSelector(state => state.cart.cart)

    return(
        <>
            <div className="cart">
            {
                products.map(product => (
                    <CartDetail products = {product} />
                ))
            }
            </div>
            
        </>
    )
}

export default Cart