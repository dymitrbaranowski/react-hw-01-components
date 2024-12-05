import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 5vh;
  /* background-color: ; */
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;

  transition-property: background-color, color;
  transition-duration: 300ms;

  :hover {
    background-color: orange;
  }
`;

export const Avatar = styled.img`
  margin: 0 auto;
`;

export const Name = styled.p`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;

  /* transition-property: background-color, color;
  transition-duration: 1000ms; */
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;
