import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/data'; // Import your data

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img src={product.imgUrl} alt={product.productName} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
