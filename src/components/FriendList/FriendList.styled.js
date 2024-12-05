import styled from 'styled-components';

export const List = styled.ul`
  margin: 15px;
  padding: 15px;
  list-style: none;
  background-color: inheritColor;
  /* transition-property: background-color, color;
  transition-duration: 300ms; */

  transition-property: background-color, color;
  transition-duration: 1250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: orange;
    /* color: #fff; */
  }
`;
