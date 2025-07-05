import React from 'react';

const FoodList = ({ items, addToCart }) => (
    <div>
        <h2 className="menu-title">Menu</h2>
        <div className="food-list">
            {items.map(item => (
                <div key={item._id} className="food-card">
                    {item.image && (
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }} />
                    )}
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
);

export default FoodList;
