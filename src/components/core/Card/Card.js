import React, { Component } from 'react';
import styled, {withTheme} from 'styled-components';
import Heading from './Heading';

const MARGIN_BASE = 8;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
    width: 360px;
    height: 400px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 2px 3px rgba(0,0,0,.10);
    margin: ${MARGIN_BASE}px,
`;

const CardImg = styled.div`
  height: 185px;
  width: 100%;
  border-top-left-radius: ${props => props.theme.button.radius};
  border-top-right-radius: ${props => props.theme.button.radius};
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  flex-shrink: 0;
`;

const CardBody = styled.div`
  padding: 30px;
  padding-bottom: 0;
  padding-right: 15;
  background: ${props => props.theme.card.background};
  border-bottom-left-radius: ${props => props.theme.button.radius};
  border-bottom-right-radius: ${props => props.theme.button.radius};
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const BodyText = styled.div`
  color: ${props => props.theme.card.bodyTextColor};
  font-size: 14px;
  line-height: 21px;
  display: flex;
  font-weight: normal;
`;

export const SubHeading = styled.div`
  color: ${props => props.theme.card.subheadingTextColor};
  text-transform: uppercase;
  font-size: 12px;
  font-family: Roboto;
  font-weight: ${props => props.theme.typography.medium};
  letter-spacing: 1px;
  line-height: 12px;
  margin-bottom: 15,
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Card = withTheme(({ theme, heading, subheading, content, footer, src }) => (
  <CardContainer>
    {src && <CardImg src={src} />}
    <CardBody>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {subheading && <SubHeading>{subheading}</SubHeading>}
        <Heading
          size={3}
          color="#ffffff"
          css={{
            margin: 0,
            marginBottom: 10,
            fontFamily: 'Roboto',
            fontWeight: theme.typography.light,
            lineHeight: '34px',
          }}
        >
          {heading}
        </Heading>
        <BodyText>{content}</BodyText>
      </div>
      {footer && footer}
    </CardBody>
  </CardContainer>
));

export default Card;
