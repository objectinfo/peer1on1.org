import React from 'react';
import styled from 'styled-components';
// import Link from '../Link';
import Link from 'gatsby-link';

export const CardLink = styled(props => <Link {...props} />)`
  transition: all .4s ease-in-out;
  text-shadow: none;
  text-decoration: none;
  :hover: {
    opacity: 0.8;
    box-shadow: 0 10px 10px 1px rgba(0, 0, 0, .5);
  };
`;

export default CardLink;