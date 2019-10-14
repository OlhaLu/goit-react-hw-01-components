import React from 'react';
import ProfileUser from './Profile/Profile.js';
import StatsUser from './Stats/Stats.js';
import FriendsList from './FriendList/FriendList.js';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';

import user from '../user.json';
import stats from '../statsArray.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

function App() {
  return (
    <>
      <ProfileUser user={user} />
      <StatsUser title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
