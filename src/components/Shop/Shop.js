import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [SearchedProducts, setSearchedProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchedProducts(data)
            })
    }, []);
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quentity = savedCart[key];
                    addedProduct.quentity = quentity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchedProducts(matchedProducts);
        console.log(SearchedProducts)
    }
    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="search" onChange={handleSearch} />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        SearchedProducts.map(product => <Product product={product} handleAddToCart={handleAddToCart} key={product.key}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;