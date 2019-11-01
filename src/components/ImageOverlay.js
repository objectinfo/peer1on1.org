import Slider from "react-slick";
import styled from 'styled-components';

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

export default class ImageOverlay extends Component {
  render() {

    return (
              <div key={imgKey}>
                <img src={item.img} /> 
                <SliderContentsWrap>
                  <SliderContentsInnerWrap>Talent Show</SliderContentsInnerWrap>
                </SliderContentsWrap> 
                           
              </div>
    );
  }
}