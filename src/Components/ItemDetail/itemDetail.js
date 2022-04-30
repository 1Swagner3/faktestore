import React, { useEffect } from "react";
import './itemDetail.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../../Redux/Shop/shop-actions";
import { addToCart } from "../../Redux/Cart/cart-actions";
import { useSelector } from "react-redux";

const ItemDetail = () => {

    const product = useSelector((state) => state.product)

    const {productId} = useParams()
    const dispatch = useDispatch()

    const fetchDetails = async () => {
        try{
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            dispatch(selectedProduct(response.data))
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleClick = () => {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        if(productId && productId !== "") fetchDetails()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <>  
        <div className="detail-super-container">
            <div className="detail-container">
                <img src={product.image} alt="" id="detail-image"/>
                <div className="details">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="details-foot">
                        <p>${product.price}</p>
                        <button onClick={handleClick}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}

export default ItemDetail