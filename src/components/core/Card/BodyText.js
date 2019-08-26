import styled from 'styled-components';

export const BodyText = styled.div`
  color: ${props => props.theme.card.bodyTextColor};
  fontSize: 14px;
  lineHeight: 21px;
  display: flex;
`;

export default BodyText;