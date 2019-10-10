import React from 'react';
import T from 'prop-types';
import transactions from '../../transactions.json';
import styles from './TransactionHistory.module.css';

const Transaction = ({items}) => {
    return (
<table className={styles.section}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(el => (
    <tr>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
  ))}
  </tbody>
</table>

    )
}

Transaction.propTypes = {
    type: T.string.isRequired,
    amount: T.number.isRequired,
    currency: T.string.isRequired,
}

const TransactionHistory = () => {
    return (
      <div>
        <Transaction items={transactions} />
      </div>
    );
  };


export default TransactionHistory;