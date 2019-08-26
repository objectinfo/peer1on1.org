import * as React from 'react';
import AvatarImage from './image';
import { Container, AvatarLink } from './style';


export default class Avatar extends React.Component {
  render() {
    const {
      profilePhoto,
      size = 32,
      isClickable = true,
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
        type={'community'}
      >

          <AvatarImage
            src={source}
            size={size}
            mobilesize={mobilesize}
            type={'community'}
          />
        
      </Container>
    );
  }
}
