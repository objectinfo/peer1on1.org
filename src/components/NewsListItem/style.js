import styled from 'styled-components';
import theme from '../shared/theme';
import {MEDIA_BREAK, MAX_SECONDARY_COLUMN_WIDTH } from '../shared';

export const NewsListContainer = styled.div`
  width: 100%;
`;

export const NewsListItemContainer = styled.div`
  margin: 0 0 20px;
  padding: 0 0 10px;
  border-bottom: 2px solid #d8dde0;
  @media (max-width: 49.99em) {
    margin-bottom:24px;
    padding-bottom: 24px
  };
`;

export const NewsListingItemTitle = styled.h4`
  font-size: 20px;
  text-transform: none;
  line-height: 26px;
  letter-spacing: -.5px;
  margin-bottom: 8px;
  @media (max-width: 34.365em) {
    font-size:18px
  };
  &::selection {
    background: #fcf113
  }

  a {
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(65%,transparent),color-stop(10%,#fcf113));
    background-image: linear-gradient(180deg,transparent 65%,#fcf113 0);
    background-size: 0 100%;
    background-repeat: no-repeat;
    text-decoration: none;
    -webkit-transition: background-size .4s ease;
    transition: background-size .4s ease;
    &:focus,&:hover {
      background-size: 100% 100%;
      cursor: pointer
    }
  }
`;

export const NewsListItemSubTitle = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: #a2aeb6;
`;

export const NewsListItemDate = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: #a2aeb6;

  a {
    -webkit-transition: color .2s;
    transition: color .2s;
    display: inline;
    margin: 0;
    background: none;
    text-decoration: none;
    border-bottom: 2px solid;
    &:focus,&:hover {
      cursor: pointer;
      color: #262c30
    }
  }
`;