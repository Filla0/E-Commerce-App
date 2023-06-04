import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card" style={{ width: '200px', margin: '10px', textAlign: 'center' }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '150px', height: '150px' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
