import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import useCart from '../useCart/useCart';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key)
    }
    const history = useHistory();
    const handlePlaceOrder = () => {
        history.push('/placeorder');
        setCart([]);
        clearTheCart();
    }
    return (

        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem key={product.key} product={product} handleRemove={handleRemove}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="btn-regular" onClick={handlePlaceOrder}>Place order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;