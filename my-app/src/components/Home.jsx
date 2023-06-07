import React from 'react';
import ProductCard from './ProductCard';
import Header from './Header';

function Home() {
  // Sample product data (replace with your own product data)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      imageUrl: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
      imageUrl: 'product2.jpg',
    },
    // Add more product objects as needed
  ];

  return (
    <div className="home">
      <Header/>
      <h1 style={{ textAlign: 'center' }}>Welcome to our E-commerce Store</h1>

      <h2 style={{ textAlign: 'center' }}>Featured Products</h2>
      <div className="product-list" style={{ display: 'flex', justifyContent: 'center' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
