import React from 'react';
import friends from '../../friends.json';
import FriendsListItem from './FriendListItem.js'


const Friends = ({friends}) => (
    <ul> 
        {friends.map(el => {
        return <FriendsListItem
               key={el.id}
               name={el.name}
               avatar={el.avatar}
               isOnline={el.isOnline}
               />
        })}
    </ul>
    )

  const FriendsList = () => {
    return (
      <div>
        <Friends friends={friends} />
      </div>
    );
  };

export default FriendsList;
