import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const HederRow = styled.thead`
  font-size: 1.5rem;
  text-align: center;
`;

export const ValuesRow = styled.tr`
  width: 33%;
  color: #8a8b8e;
  font-size: 2rem;
  text-align: center;
  text-transform: capitalize;
  transition-property: background-color, color;
  transition-duration: 300ms;

  :last-child .transactionData:first-child {
    border-radius: 0 0 0 0.5rem;
  }

  :last-child .transactionData:last-child {
    border-radius: 0 0 0.5rem 0;
  }

  :hover {
    color: #02bbd7;
    background-color: #fff;
  }
`;

export const ColumnHeader = styled.th`
  width: 30%;
  padding: 1rem 5rem;
  background-color: #02bbd7;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  transition-property: color;
  transition-property: background-color, color;
  transition-duration: 300ms;

  :hover {
    color: #02bbd7;
    background-color: #fff;
  }

  /* :first-child {
    border-radius: 0.5rem 0 0 0;
  }

  :last-child {
    border-radius: 0 0.5rem 0 0;
  } */
`;
