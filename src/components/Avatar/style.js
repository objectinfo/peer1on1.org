import theme from '../shared/theme';
import styled, { css } from 'styled-components';
import ReactImage from 'react-image';
import { MEDIA_BREAK } from '../shared';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${props => `${props.size / 8}px`};
  border: none;
  background-color: ${theme.bg.default};
  ${props =>
    props.mobilesize &&
    css`
      @media (max-width: ${MEDIA_BREAK}px) {
        width: ${props => `${props.mobilesize}px`};
        height: ${props => `${props.mobilesize}px`};
      }
    `};
`;

export const Img = styled(ReactImage)`
  display: inline-block;
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${props => `${props.size / 8}px`};
  object-fit: cover;
  background-color: ${theme.bg.default};
  ${props =>
    props.mobilesize &&
    css`
      @media (max-width: ${MEDIA_BREAK}px) {
        width: ${props => `${props.mobilesize}px`};
        height: ${props => `${props.mobilesize}px`};
      }
    `};
`;

export const FallbackImg = styled.img`
  display: inline-block;
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${props => `${props.size / 8}px`};
  object-fit: cover;
  background-color: ${theme.bg.wash};
  ${props =>
    props.mobilesize &&
    css`
      @media (max-width: ${MEDIA_BREAK}px) {
        width: ${props => `${props.mobilesize}px`};
        height: ${props => `${props.mobilesize}px`};
      }
    `};
`;

export const LoadingImg = styled.div`
  display: inline-block;
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${props => `${props.size / 8}px`};
  background: ${theme.bg.wash};
  ${props =>
    props.mobilesize &&
    css`
      @media (max-width: ${MEDIA_BREAK}px) {
        width: ${props => `${props.mobilesize}px`};
        height: ${props => `${props.mobilesize}px`};
      }
    `};
`;
