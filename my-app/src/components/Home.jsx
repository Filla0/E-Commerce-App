import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import Header from './Header';
import './HomeStyle.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slideshow component
const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        <div>
        <img src="https://images.pexels.com/photos/17213029/pexels-photo-17213029/free-photo-of-woman-in-white-clothes-walking-across-parking-lot-in-front-of-retro-volkswagen-camper.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" />
        </div>
        <div className="slide-item">
          <img src="https://images.pexels.com/photos/12156300/pexels-photo-12156300.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" />
        </div>
        <div className="slide-item">
          <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

// Trending component
const Trending = () => {
  return (
    <div className="trending-container">
      <h2>Trending This Week</h2>
      <div className="trending-photos">
        <div className="photo-item">
          <img src="" alt="Photo 1" />
          <div className="overlay">
            <h3>Model 1</h3>
            <p>Click for details</p>
          </div>
        </div>
        <div className="photo-item">
          <img src="" alt="Photo 2" />
          <div className="overlay">
            <h3>Model 2</h3>
            <p>Click for details</p>
          </div>
        </div>
        <div className="photo-item">
          <img src="" alt="Photo 3" />
          <div className="overlay">
            <h3>Model 3</h3>
            <p>Click for details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Shop component
const Shop = () => {
  return (
    <div className="shop-container">
      <h2>Shop on Sport</h2>
      <div className="shop-items">
        <div className="shop-item">
          <img src="https://example.com/sport1.jpg" alt="Sport Item 1" />
          <div className="item-details">
            <h3>Sport Item 1</h3>
            <p>$29.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="shop-item">
          <img src="https://example.com/sport2.jpg" alt="Sport Item 2" />
          <div className="item-details">
            <h3>Sport Item 2</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="shop-item">
          <img src="https://example.com/sport3.jpg" alt="Sport Item 3" />
          <div className="item-details">
            <h3>Sport Item 3</h3>
            <p>$49.99</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home component
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slideshow />
      <hr className="divider" />
      <Trending />
      <Shop />
    </div>
  );
};

export default Home;
