import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponent(props) {
    const products = useSelector((state) => state.allProducts.products); //it take argument state
    // const {id,title}=products[0]
    const renderList = products.map((product) => {
        return (
            <Link to={`product/${product.id}`}>
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
        75 Friends
      </span>
                </div>
            </div>
            </Link>
        );
    })
    return (
        <>
            {renderList}
        </>

    )

}

export default ProductComponent;