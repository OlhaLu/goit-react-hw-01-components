import React from 'react';
import T from 'prop-types';
import user from '../../user.js';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={styles.description}>
      <img
        style={{ borderRadius: 60 }}
        src={user.avatar}
        alt="user avatar"
        className={styles.avatar}
      />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>@{user.tag}</p>
      <p className={styles.location}>{user.location}</p>

      <ul className={styles.profileList}>
        <li className={styles.profileItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{user.stats.followers}</span>
        </li>
        <li className={styles.profileItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{user.stats.views}</span>
        </li>
        <li className={styles.profileItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: T.string.isRequired,
  alt: T.string,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  stats: T.shape(
    {
      followers: T.number.isRequired,
      views: T.number.isRequired,
      likes: T.number.isRequired,
    }.isRequired,
  ).isRequired,
};

const ProfileUser = () => {
  return (
    <div className={styles.profile}>
      <Profile user={user} />
    </div>
  );
};

export default ProfileUser;
