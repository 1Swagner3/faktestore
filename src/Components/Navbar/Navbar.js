import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {

    const products = useSelector(state => state.cart.cart)
    
   
    const countCart = () => {
        let cartCounter = 0
        products.map(item => cartCounter += item.qty)
        return cartCounter
    }
    
    let count = countCart()
    useEffect(() => {count = countCart()}, [products])


    return (
        <>
            <div className="nav-container">
                <Link to={"/"}>
                    <h2>Fakestore</h2>
                </Link>
                
                <Link to={"/cart"}>
                    <div className="iconbox">
                        {count > 0 && <div className="cartCount">{count}</div>}
                        <FontAwesomeIcon icon={faCartShopping} size="1x"/>
                    </div>
                </Link>
            </div>
            
        </>
    )
}

export default Navbar;