import styled from 'styled-components';
import theme from '../shared/theme';
import {MEDIA_BREAK, MAX_SECONDARY_COLUMN_WIDTH } from '../shared';


export const BoxedHeaderContainer = styled.div`
  position: relative;
  margin: 20px 0 25px;
  width: 100%;
  min-height: 39px;
  text-align: center;
  &::before {
    content: "";
    display: block;
    left: 0;
    right: 0;
    top: 50%;
    border-bottom: 1px solid #d8dde0;
    position: absolute    
  }  
`;


export const BoxedHeaderHeading2 = styled.h2`
  padding: 10px 20px;
  margin: 0;
  background-color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: #000;
  border: 1px solid #d8dde0;
  display: inline-block;
  position: relative
`;

