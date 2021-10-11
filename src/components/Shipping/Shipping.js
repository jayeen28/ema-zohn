import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => console.log(data);
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