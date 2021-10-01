import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    const quenReducer = (previous, recent) => {
        console.log('hello');
    };
    const count = cart.reduce(quenReducer, 0);
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);

    const shipping = 15;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order summary: </h3>
            <h4>Items order: {count}</h4>
            <h4>Total: {total.toFixed(2)}</h4>
            <h4>Shipping: {shipping.toFixed(2)}</h4>
            <h4>Tax: {tax.toFixed(2)}</h4>
            <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;