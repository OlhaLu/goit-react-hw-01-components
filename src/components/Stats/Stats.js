import React from 'react';
import T from 'prop-types';
import stats from '../../statsArray.js';
import styles from './Stats.module.css'

const Stats = ({title, stats}) => {
    return (
        <section className={styles.section}>
        <h2 className={title}>Upload stats</h2>

    <ul className={styles.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={styles.item}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
</section>
    )
}

Stats.propTypes = {
    title: T.string.isRequired,
    stats: T.arrayOf(
        T.shape({
        id: T.string.isRequired,
        label: T.string.isRequired,
        percentage: T.number.isRequired,
      }),
    ).isRequired,
  };


const StatsUser = () => {
    return (
      <div>
        <Stats stats={stats} />
      </div>
    );
  };


export default StatsUser;