import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 2rem;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 2.5rem;
  border-bottom: 1px solid #d3d5e3;
`;

export const StatList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
    display: flex;
  flex-direction: column;
  text-align: center;
  text-shadow: 0 0 3px #000;
`;

export const Label = styled.span`
  padding-top: 1.3rem;
  font-size: 1rem;
  color: #fff;
`;

export const Percentage = styled.span`
  padding: 1.3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;