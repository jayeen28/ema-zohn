import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" className="logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="Manage Inventory">ManageInventory</a>
            </nav>
        </div>
    );
};

export default Header;