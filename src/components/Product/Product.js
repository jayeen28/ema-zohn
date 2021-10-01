import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';
//import Cart from '../Cart/Cart';
const Product = (props) => {

    const { name, img, seller, price, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p>Sells by {seller}</p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={star}
                    readonly>
                </Rating><br /><br />
                <button className="yellow-cart" onClick={() => props.handleAddToCart(props.product)}>{cartIcon}Add to cart</button>
            </div>
        </div>
    );
};

export default Product;