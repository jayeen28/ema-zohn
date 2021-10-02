import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <h4 className="product-name">{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button className="btn-regular" onClick={() => {
                handleRemove(key);
            }}>Remove</button>
        </div>
    );
};

export default ReviewItem;