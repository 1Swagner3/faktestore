import React, {useEffect} from "react";
import './ItemTable.css'
import ItemCard from "../ItemCard/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../../Redux/Shop/shop-actions";


const ItemTable = () => {

    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            dispatch(setProducts(res.data))
        } catch (error){
            console.log(error.message)
        }
    }

    useEffect(()=> {
        fetchProducts()
    }, [])


    return (
        <>
            <div className="table-container">
            {
                products.map(obj => (
                    <ItemCard 
                        product = {obj}
                    />
                ))
            }
            </div>
            
        </>
    )
}

export default ItemTable;