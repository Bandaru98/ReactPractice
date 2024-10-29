import React from 'react';

const FoodItem = ({ item, addToCart }) => {
  return (
    <div className="food-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
