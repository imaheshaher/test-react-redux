import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProducts} from "../redux/actions/productActions"
function ProductListing(props) {
    const products = useSelector((state) => state); //it take argument state
    const dispatch = useDispatch();
    console.log(products)
    const fetchProducts = async () =>{
        const response=  await axios.get('https://fakestoreapi.com/products')
        .catch((err) =>console.log(err))
        
        dispatch(setProducts(response.data))
    }
    useEffect(() =>{
        fetchProducts()
    },[])
    console.log("Products",products)
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing;