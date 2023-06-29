import React from 'react';
import Slider from 'react-slick';
import Header from './Header';
import airForcesImage from '../components/TrendingThisWeak/product1.png';
import airForcesImage from '../components/TrendingThisWeak/product2.png';
import airForcesImage from '../components/TrendingThisWeak/product1.png';
import './HomeStyle.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slideshow component
const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Remove navigation arrows
    prevArrow: false, // Remove previous arrow
    nextArrow: false, // Remove next arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  const slideItems = [
    {
      image: 'https://images.pexels.com/photos/17291371/pexels-photo-17291371/free-photo-of-vrouw-blauw-bomen-model.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Slide 1',
      description: 'Description 1',
    },
    {
      image: 'https://images.pexels.com/photos/2005355/pexels-photo-2005355.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Slide 2',
      description: 'Description 2',
    },
    {
      image: 'https://images.pexels.com/photos/16564748/pexels-photo-16564748/free-photo-of-mode-man-model-jeans.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Slide 3',
      description: 'Description 3',
    },
    {
      image: 'https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Slide 4',
      description: 'Description 4',
    },
    {
      image: 'https://images.pexels.com/photos/16550250/pexels-photo-16550250/free-photo-of-mode-pak-vrouw-model.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Slide 5',
      description: 'Description 5',
    },
  ];

  return (
    <div className="slideshow">
      <Slider {...settings}>
        {slideItems.map((item, index) => (
          <div key={index} className="slide-item">
            <img src={item.image} alt={item.title} />
            <div className="slide-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Content section component
const ContentSection = () => {
  return (
    <div className="content-section">
      <h2>Vivaro</h2>
      <p>
      With meticulous attention to detail and a commitment to quality craftsmanship, each product is meticulously designed to exude elegance and elevate the wearer's individuality.
      </p>
    </div>
  );
};

// Slideshow2 component
const Slideshow2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Remove navigation arrows
    prevArrow: false, // Remove previous arrow
    nextArrow: false, // Remove next arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slideItems = [
    {
      image: 'https://example.com/slideshow2-image1.jpg',
      title: 'Slide 1',
      description: 'Description 1',
    },
    {
      image: 'https://example.com/slideshow2-image2.jpg',
      title: 'Slide 2',
      description: 'Description 2',
    },
    {
      image: 'https://example.com/slideshow2-image3.jpg',
      title: 'Slide 3',
      description: 'Description 3',
    },
  ];

  return (
    <div className="slideshow">
      <Slider {...settings}>
        {slideItems.map((item, index) => (
          <div key={index} className="slide-item">
            <img src={item.image} alt={item.title} />
            <div className="slide-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
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
          <img src={product1} alt="Photo 1" />
          <div className="overlay">
            <h3>Model 1</h3>
            <p>Click for details</p>
          </div>
        </div>
        <div className="photo-item">
          <img src="https://example.com/photo2.jpg" alt="Photo 2" />
          <div className="overlay">
            <h3>Model 2</h3>
            <p>Click for details</p>
          </div>
        </div>
        <div className="photo-item">
          <img src="https://example.com/photo3.jpg" alt="Photo 3" />
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
      <div className="secondary-background">
        <ContentSection />
        <Slideshow />
      </div>
      <Trending />
      <Slideshow2 />
      <Shop />
    </div>
  );
};


export default Home;
