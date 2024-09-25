import React from 'react';
import { products } from './data'; // Import your data
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component

const NewArrivals = () => {
  const newArrivals = products.filter(product => product.isNewArrival);

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

export default NewArrivals;


