import styled from 'styled-components';
import theme from '../shared/theme';
import {MEDIA_BREAK, MAX_SECONDARY_COLUMN_WIDTH } from '../shared';

const Truncate = () => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
`;

export const TeamContainer = styled.div`
  width: 280px;
  height: 320px;
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

export const TeamContainerBack = styled.div`
  width: 280px;
  height: 320px;
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #f7f5ec;
  text-align: left;
  overflow: hidden;
  position: relative;
`;

export const TeamPictureContainer = styled.div`
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 20px;
  z-index: 1;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 0;
    border-radius: 50%;
    background-color: #1369ce;
    position: absolute;
    bottom: 135%;
    right: 0;
    left: 0;
    opacity: 0.9;
    transform: scale(3);
    transition: all 0.3s linear 0s; 
    ${TeamContainer}:hover & {
      height: 100%;
    }     
  };
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #1369ce;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }    
`;

export const TeamPictureImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
  ${TeamContainer}:hover & {
    box-shadow: 0 0 0 16px #f7f5ec;
    transform: scale(0.7);
  }
`;


export const TeamContent = styled.div`

`;

export const SidebarSectionHeading = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.text.default};
  display: flex;
  flex: 1 0 auto;
  padding-right: 16px;
  @media (max-width: ${MEDIA_BREAK}px) {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.text.secondary};
  }
`;

export const TeamSocial = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #1369ce;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
  ${TeamContainer}:hover & {
    bottom: 0;
  }  
`;

export const TeamSocialItem = styled.li`
  display: inline-block;
  margin-bottom: 0px;
`;

export const TeamSocialItemLink = styled.a`
  display: block;
  padding: 0px 10px 0px 10px;
  font-size: 20px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  &:hover {
    color: #1369ce;
    background-color: #f7f5ec;    
  }
`;