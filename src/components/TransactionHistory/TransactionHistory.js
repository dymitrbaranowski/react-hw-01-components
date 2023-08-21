import PropTypes from 'prop-types';

import { TransactionHistoryTable } from './Transactionhistory.styled';

const TransactionHistory = ({ items }) => {
    return (
      <TransactionHistoryTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
      </TransactionHistoryTable>
    );
}




















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