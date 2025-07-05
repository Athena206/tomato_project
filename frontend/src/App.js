import React, { useState, useEffect } from 'react';
import FoodList from './components/FoodList';
import Cart from './components/Cart';
import axios from 'axios';
import './App.css';

function App() {
    const [foodItems, setFoodItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/food').then(res => setFoodItems(res.data));
    }, []);

    const addToCart = (item) => setCart([...cart, item]);

    const placeOrder = () => {
        axios.post('http://localhost:5000/api/order', { items: cart }).then(() => {
            alert("Order placed!");
            setCart([]);
        });
    };

    return (
        <div className="app-container">
            <h1>Tomato</h1>
            <FoodList items={foodItems} addToCart={addToCart} />
            <Cart cart={cart} placeOrder={placeOrder} />
        </div>
    );
}

export default App;
