import * as React from 'react';
import AvatarImage from './image';
import { Container } from './style';


export default class Avatar extends React.Component {
  render() {
    const {
      profilePhoto,
      size = 32,
      mobilesize,
      style,
    } = this.props;

    const communityFallback = '/img/default_community.svg';
    const source = [profilePhoto, communityFallback];

    return (
      <Container
        size={size}
        mobilesize={mobilesize}
        style={style}
      >
        <AvatarImage
          src={source}
          size={size}
          mobilesize={mobilesize}
        />      
      </Container>
    );
  }
}
