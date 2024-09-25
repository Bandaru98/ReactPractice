// Assuming products have an 'arrivalDate' and 'salesCount' property
import React from 'react';
import { products } from '../data/data'; // Import your data

const NewArrivals = () => {
  const today = new Date();
  const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));
  
  const newArrivals = products.filter(product => {
    const arrivalDate = new Date(product.arrivalDate);
    return arrivalDate >= thirtyDaysAgo;
  });

  return (
    <div className="container">
      <h2>New Arrivals</h2>
      <div className="row">
        {newArrivals.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const BestSales = () => {
  const bestSales = products.filter(product => product.salesCount > 100); // Example criteria

  return (
    <div className="container">
      <h2>Best Sales</h2>
      <div className="row">
        {bestSales.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { NewArrivals, BestSales };



