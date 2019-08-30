import styled from 'styled-components';
import theme from '../shared/theme';
import {MEDIA_BREAK, MAX_SECONDARY_COLUMN_WIDTH } from '../shared';

const Truncate = () => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  @media (max-width: ${MEDIA_BREAK}px) {
    border-radius: 0;
    margin-top: 0;
    border: 0;
  }
`;

export const CoverPhoto = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${MAX_SECONDARY_COLUMN_WIDTH / 3}px;
  max-height: ${MAX_SECONDARY_COLUMN_WIDTH / 3}px;
  background-color: ${theme.text.default};
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border-radius: 4px 4px 0 0;
  @media (max-width: ${MEDIA_BREAK}px) {
    border-radius: 0;
  }
`;

export const ActivityAvatarContainer = styled.div`
  position: relative;
  top: -36px;
  width: 68px;
  height: 68px;
  margin-left: 36px;
  border-radius: 10px;
  background: ${theme.bg.default};
  border: 4px solid ${theme.bg.default};
  margin-bottom: -24px;
`;

export const Description = styled.p`
  margin-top: 8px;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: ${theme.text.secondary};
  word-break: break-word;
  a {
    color: ${theme.text.default};
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SidebarSection = styled.section`
  background: ${theme.bg.default};
  border: 1px solid ${theme.bg.border};
  margin-top: 24px;
  border-radius: 4px;
  @media (max-width: ${MEDIA_BREAK}px) {
    border: 0;
    margin-top: 0;
    &:last-of-type {
      border-bottom: 1px solid ${theme.bg.border};
    }
    &:not(:first-of-type) {
      border-top: 1px solid ${theme.bg.border};
    }
  }
`;

export const SidebarSectionHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.bg.border};
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  position: sticky;
  top: 0;
  background: ${theme.bg.default};
  z-index: 11;
  border-radius: 4px 4px 0 0;
  a {
    display: flex;
    flex: none;
    align-items: center;
    color: ${theme.text.alt};
    &:hover {
      color: ${theme.text.default};
    }
  }
  @media (max-width: ${MEDIA_BREAK}px) {
    z-index: 1;
    background: ${theme.bg.wash};
    border-bottom: 1px solid ${theme.bg.border};
    padding: 24px 16px 8px 16px;
    position: relative;
  }
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