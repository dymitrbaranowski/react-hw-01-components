import styled from 'styled-components';

export const List = styled.ul`
  margin: 15px;
  padding: 15px;
  list-style: none;
  transition-property: background-color, color;
  transition-duration: 300ms;

  :hover {
    background-color: orange;
  }
`;
