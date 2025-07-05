import React from 'react';

const Cart = ({ cart, placeOrder }) => (
    <div className="cart">
        <h2 className="cart-title">Cart</h2>
        <ul className="cart-list">
            {cart.map((item, index) => (
                <li key={index}>{item.name} - ₹{item.price}</li>
            ))}
        </ul>
        <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
    </div>
);

export default Cart;
