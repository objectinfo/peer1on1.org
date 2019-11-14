import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "bulma-carousel/dist/css/bulma-carousel.min.css";
// import bulmaCarousel from "bulma-carousel";
const bulmaCarousel = (() => {
  if (typeof window !== 'undefined') {
      return require('bulma-carousel')
  }
})()

export default function ImageCarousel(props) {

  const {
    images,
    slidesToShow,
    slidesToScroll,
    carouselType
  } = props;
  const carouselRef = React.createRef();
  const { carousels } = props;

  // This is like componentDidMount() in class based components.
  useEffect(() => {
    bulmaCarousel.attach(carouselRef.current, {
      slidesToShow: 1,
      slidesToScroll: 1,
      pagination: false,
      effect: 'fade',
      loop: true,
      autoplay: true,
      navigation: true,
      carouselType
    });
  }, [carouselRef]);

  return (
    <div className="hero is-medium has-carousel" style={{height: '100%'}}>
    <div className="hero-carousel" ref={carouselRef}>
    {
      carousels.map((item, i) => {
        let imgKey = `carousel_img_${i}`;
        return (
          <div className='has-background' key={imgKey}>
            <img className='is-background' src={item.img} alt=''/>          
          </div>
        );
      })
    }
    </div>
    </div> 
  );
};
