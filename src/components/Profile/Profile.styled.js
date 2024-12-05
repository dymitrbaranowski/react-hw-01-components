import styled from 'styled-components';

export const Container = styled.div`
  max-width: 40%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  background-color: #ffff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const Avatar = styled.img`
  display: 'flex';
  max-width: 30%;
  border-radius: 50%;
  border: 0.5px solid rgb(0, 0, 0);
`;

export const ProfileName = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 2.5rem;
`;

export const ProfileTag = styled.p`
  margin: 0.5rem;
  font-size: 2rem;
  color: #8a8b8e;
`;

export const Stats = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ViewsList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  border-left: 1px solid #d3d5e3;
  border-right: 1px solid #d3d5e3;
`;

export const FollowersList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  border-radius: 0 0 0 0.5rem;
`;

export const LikeList = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  border-radius: 0 0 0 0.5rem;
`;

export const Label = styled.span`
  padding-bottom: 0.5rem;
  color: #8a8b8e;
`;

export const Quantity = styled.span`
  font-weight: bold;
  border-radius: 0.5rem;
`;
