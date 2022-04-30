import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useDispatch } from "react-redux";
import {removeFromCart} from '../../Redux/Cart/cart-actions'
import './cartDetail.css'

const CartDetail = (products) => {

    const {id, title, price, description, image, qty} = products.products

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(removeFromCart(id))
    }
    return (
        <>
            <div className="cartDetailContainer" key={id}>
                <img src={image} alt=""/>
                <div className="cartContent">
                    <div className="cartHead">
                        <h2>{title}</h2>
                        <h2>x{qty}</h2>
                    </div>
                    <p>{description}</p>
                    <div className="cartFoot">
                        <h3>${price}</h3>
                        <button onClick={handleClick} id="removeButton"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartDetail