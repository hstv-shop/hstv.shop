/* eslint-disable */
import styled from 'styled-components';

export const Main = styled.div`
  margin: 1em;
  padding: 1em;
  display: flex;
  flex-flow: column;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

export const FlexHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  &:hover {
    color: rgb(222, 99, 23)
  }
  &:active {
    color: rgb(59, 167, 184)
  }
  `
