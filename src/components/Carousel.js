import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

export const CarouselPhoto = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${props => props.height};
  max-height: ${props => props.height};
  background-color: '#24292E';
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border-radius: 4px 4px 0 0;
  @media (max-width: 1120px) {
    border-radius: 0;
  }
`;

export const ShortDescContainer = styled.div`
  position: absolute;
  top: 200px;
  width: 300px;
  height: 100px;
  margin-left: 50%;
  border-radius: 10px;
  font-color: 'white';
`;

const ImageOverlayTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px grey;
`;

export default class Carousel extends Component {
  render() {
    const { carousels } = this.props

    var settings = {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      centerMode: true,
      centerPadding: 0
    };
    return (
        <Slider {...settings} className="carousel">
        {
          carousels.map((item, i) => {
            let imgKey = `carousel_img_${i}`;
            return (
              <div key={imgKey}>
                {/* <div className="caption"></div> */}
                {/* <img src={item.img} />    */}
                <CarouselPhoto src={item.img} height={'calc( 100vh - 6.5rem )'} />
                 <ShortDescContainer>
                  <ImageOverlayTitle>Talent Show</ImageOverlayTitle>
                </ShortDescContainer>
                           
              </div>
            );
          })
        }
        </Slider>
    );
  }
}