import React from 'react';
import ProfileUser from './Profile/Profile.js';
import StatsUser from './Stats/Stats.js';
import FriendsList from './FriendList/FriendList.js';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';

function App() {
    return (
    <>
    <ProfileUser />
    <StatsUser />
    <FriendsList/>
    <TransactionHistory/>
    </>
    )}

export default App;