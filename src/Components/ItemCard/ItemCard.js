import React from "react";
import './ItemCard.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Cart/cart-actions";


const ItemCard = (product) =>{

    const {id, title, price, image} = product.product

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addToCart(product.product))
    }

    return (
        <> 
            
            <div className="container" key={id}>
                <Link to={`/product/${id}`}>
                <img src={image} alt=""/>
                <div className="content">
                    <h4>{title}</h4>
                </div>
                </Link>
                <div className="itemCard-foot">
                    <p>${price}</p>
                    <button onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
            
        </>
    )
}

export default ItemCard;