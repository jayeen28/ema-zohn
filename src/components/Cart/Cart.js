import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    const countReducer = (previous, product) => previous + product.quantity;
    const count = cart.reduce(countReducer, 0)
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);

    const shipping = 15;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order summary: </h3>
            <h4>Items ordered: {count}</h4>
            <h4>Total: {total.toFixed(2)}</h4>
            <h4>Shipping: {shipping.toFixed(2)}</h4>
            <h4>Tax: {tax.toFixed(2)}</h4>
            <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;