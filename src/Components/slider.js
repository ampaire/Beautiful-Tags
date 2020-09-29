/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slide1 from '../Assets/slide1.jpg';
import slide2 from '../Assets/slide2.jpg';
import slide3 from '../Assets/slide3.jpg';
import slide4 from '../Assets/slide4.jpg';

function Slider() {
  return (
    <div className="slide-container">
      <AliceCarousel autoPlay autoPlayInterval={3000}>
        <img src={slide1} className="sliderimg" />
        <img src={slide2} className="sliderimg" />
        <img src={slide3} className="sliderimg" />
        <img src={slide4} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
}

export default Slider;
