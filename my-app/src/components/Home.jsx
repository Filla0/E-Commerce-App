import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import Header from './Header';
import './HomeStyle.css';

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

  // Configuration for the React Slick slideshow
  const slideshowSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="home">
      <Header />
      <h1 className="title">Quip</h1>

      <h2 className="subtitle">Top Picks</h2>
      <div className="product-list">
        <Slider {...slideshowSettings}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>

      <div className="bar"></div>

      <h2 className="slideshow-title">Featured Items</h2>
      <div className="slideshow">
        <Slider {...slideshowSettings}>
          <div className="slideshow-item">
            <img src="slide1.jpg" alt="Slide 1" />
            <h3>Slide 1</h3>
            <p>Content for Slide 1</p>
          </div>
          <div className="slideshow-item">
            <img src="slide2.jpg" alt="Slide 2" />
            <h3>Slide 2</h3>
            <p>Content for Slide 2</p>
          </div>
          <div className="slideshow-item">
            <img src="slide3.jpg" alt="Slide 3" />
            <h3>Slide 3</h3>
            <p>Content for Slide 3</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
