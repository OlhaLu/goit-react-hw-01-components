import React from 'react';
import T from 'prop-types';
import styles from './FriendList.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendsList}>
      <span
        class="status"
        className={isOnline ? styles.online : styles.offline}
      />
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  id: T.string.isRequired,
  isOnline: T.string.isRequired,
  avatar: T.string.isRequired,
  name: T.string.isRequired,
};

export default FriendsListItem;
