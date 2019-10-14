import React from 'react';
import FriendsListItem from './FriendListItem.js';
import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.section}>
    {friends.map(el => {
      return (
        <FriendsListItem
          key={el.id}
          name={el.name}
          avatar={el.avatar}
          isOnline={el.isOnline}
        />
      );
    })}
  </ul>
);

export default FriendsList;
