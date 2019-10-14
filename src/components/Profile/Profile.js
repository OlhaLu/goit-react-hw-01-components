import React from 'react';
import T from 'prop-types';
import styles from './Profile.module.css';

const ProfileUser = ({ user }) => {
  return (
    <div className={styles.profile}>
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
            <span>Followers</span>
            <span>{user.stats.followers}</span>
          </li>
          <li className={styles.profileItem}>
            <span>Views</span>
            <span>{user.stats.views}</span>
          </li>
          <li className={styles.profileItem}>
            <span>Likes</span>
            <span>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProfileUser.propTypes = {
  avatar: T.string.isRequired,
  name: T.string.isRequired,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  stats: T.shape({
    followers: T.number.isRequired,
    views: T.number.isRequired,
    likes: T.number.isRequired,
  }).isRequired,
};

export default ProfileUser;
