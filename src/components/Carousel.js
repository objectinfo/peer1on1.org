import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

// Height=calc( 100vh - 6.5rem )
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
  left: 50px;
  width: 300px;
  height: 100px;
  margin-left: 50%;
  border-radius: 10px;
  font-color: 'white';
`;

const SliderContentsWrap = styled.div`
	position: absolute;
	left: 0;
	color: #fff;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  z-index: 0 background-color: rgba(0,0,0,.2);
	-webkit-transition: all .5s ease;
	-moz-transition: all .5s ease;
	transition: all .5s ease;
	height: 100%;
`;

const SliderContentsInnerWrap = styled.div`
	width: 50%;
	left: 0%;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	text-align: left;
	margin-left: 10%;
`;

const ImageOverlayTitle = styled.h3`
  position: relative;
  top: 100%;
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
      arrows: true,
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
                <CarouselPhoto src={item.img} height={'400px'} />
                <SliderContentsWrap>
                  <SliderContentsInnerWrap>Talent Show</SliderContentsInnerWrap>
                </SliderContentsWrap> 
                           
              </div>
            );
          })
        }
        </Slider>
    );
  }
}