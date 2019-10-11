import React from 'react';
import T from 'prop-types';
import transactions from '../../transactions.json';
import styles from './TransactionHistory.module.css';

const Transaction = ({ items }) => {
  return (
    <table className={styles.section}>
      <thead className={styles.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.table}>
        {items.map(el => (
          <tr className={styles.tableElement}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  transaction: T.arrayOf(
    T.shape({
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired,
    }),
  ).isRequired,
};

const TransactionHistory = () => {
  return (
    <div>
      <Transaction items={transactions} />
    </div>
  );
};

export default TransactionHistory;
