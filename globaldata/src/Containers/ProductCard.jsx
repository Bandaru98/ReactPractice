import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const history = useHistory();

  const handleViewDetails = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={product.imgUrl} alt={product.productName} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">${product.price}</p>
          <button className="btn btn-primary" onClick={handleViewDetails}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
