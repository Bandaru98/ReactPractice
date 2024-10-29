import React from 'react';
import { foodData } from './data';
import FoodItem from './FoodItem';

const FoodMenu = ({ addToCart }) => {
  return (
    <div className="food-menu">
      <h2>Menu</h2>
      <div className="menu-items">
        {foodData.map((item) => (
          <FoodItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
