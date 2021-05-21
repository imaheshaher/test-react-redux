import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProduct } from '../redux/actions/productActions';

function ProductDetail(props) {
    const product = useSelector((state) => state.product)
    console.log(product,"detail")
    const {productId} = useParams();
    const dispatch = useDispatch()
    const fetchProductDetail = async() =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) =>{
            console.log("err",err)
        })
        dispatch(selectedProduct(response.data))
    }
    useEffect(() =>{
        if(product && productId!== "") fetchProductDetail();
    },[productId])
    console.log(product,"detail")

    return (
        <div className="ui card">
                <div className="image">
                    <img src={product.image} height="200" />
                </div>
                <div className="content">
                    <div className="header">{product.title}</div>
                    <div className="meta">
                        <a>{product.id}</a>
                    </div>
                    <div className="description">
                        {product.category}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        ${product.price}
                    </span>
                    <span>
                        <i className="user icon"></i>
                        {product.description}
      </span>
                </div>
            </div>
 
    );
}

export default ProductDetail;