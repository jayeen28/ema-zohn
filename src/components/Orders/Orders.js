import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const key = localStorage.getItem('token')
    const [orders, setorders] = useState([]);
    const { user, isloading } = useAuth();
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                key: `Bearer ${key}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                else if (res.status === 401) {
                    history.push('/login');
                }
            })
            .then(data => {
                setorders(data);
            })
    }, [])
    return (
        <div>
            <div>
                This is orders page
            </div>
            <div>
                {orders.map(ordr => <li key={ordr._id}>
                    {ordr.name} :: {ordr.email}
                </li>)}
            </div>
        </div>
    );
};

export default Orders;