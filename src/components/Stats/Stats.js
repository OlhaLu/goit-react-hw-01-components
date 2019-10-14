import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const StatsUser = ({ title, stats }) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.statList}>
          {stats.map(item => (
            <li
              style={{ backgroundColor: getRandomColor() }}
              className={styles.item}
              key={item.id}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

StatsUser.defaultProps = {
  title: '',
};

StatsUser.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
};

export default StatsUser;
