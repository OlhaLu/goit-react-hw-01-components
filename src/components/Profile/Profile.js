import React from 'react';
import T from 'prop-types';
import user from '../../user.js';
import styles from './Profile.module.css';

 const Profile = ({user}) => {
    return (
        <div className={styles.description} >
        <img
        src={user.avatar}
        alt="user avatar"
        className="avatar"
        />
        <p className="name">{user.name}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>

      <ul className="stats">
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{user.stats.followers}</span>
        </li>
        <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{user.stats.views}</span>
      </li>
      <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
    </div>
    )
  }

  Profile.propTypes = {
  avatar: T.string.isRequired,
  alt: T.string,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  stats: 
    T.shape({
    followers: T.number.isRequired,
    views: T.number.isRequired,
    likes: T.number.isRequired,
    }.isRequired,
  ).isRequired,
}


const ProfileUser = () => {
  return (
    <div className={styles.profile}>
      <Profile user={user} />
    </div>
  );
};

export default ProfileUser;
