import * as React from 'react';
import { Img, FallbackImg, LoadingImg } from './style';

export default class Image extends React.Component {
  render() {
    const { type, size, mobilesize } = this.props;
    const { ...rest } = this.props;
    const fallbackSrc =
      type === 'user'
        ? '/img/default_avatar.svg'
        : '/img/default_community.svg';

    return (
      
        <Img
          {...rest}
          decode={false}
          loader={
            <LoadingImg
              size={size}
              mobilesize={mobilesize}
              src={fallbackSrc}
              alt=""
            />
          }
          unloader={
            <FallbackImg
              size={size}
              mobilesize={mobilesize}
              src={fallbackSrc}
              alt=""
            />
          }
        />
      
    );
  }
}
