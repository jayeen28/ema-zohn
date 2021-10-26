import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';
const Shipping = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const cart = getStoredCart();
        data.order = cart;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Your order have been place');
                    reset();
                    clearTheCart();
                }
            })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">
            <input defaultValue={user.displayName} {...register("name")} />
            <input defaultValue={user.email} {...register("email", { required: true })} />
            <input {...register("address", { required: false })} placeholder="Address" />
            <input {...register("phone", { required: false })} placeholder="Phone number" />

            {errors.exampleRequired && <span className="error">Email is required</span>}

            <input type="submit" />
        </form>
    );
};

export default Shipping;