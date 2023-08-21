import PropTypes from 'prop-types';

import { ColumnHeader, HederRow, TransactionHistoryTable, ValuesRow } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <HederRow>
        <ValuesRow>
          <ColumnHeader>Type</ColumnHeader>
          <ColumnHeader>Amount</ColumnHeader>
          <ColumnHeader>Currency</ColumnHeader>
        </ValuesRow>
      </HederRow>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
