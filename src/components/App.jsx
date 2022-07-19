import React from 'react';
import PropTypes from "prop-types";

import user from '../../src/user.json'
import dates from '../../src/data.json'
import friends from '../../src/friends.json'
import transactions from '../../src/transactions'

import { User } from './user/User'
import { Statistics } from './statistics/Statistics'
import { FriendList } from './frendList/friendList';
import {TransactionHistory} from './Transactions/Transactions'



export const App = () => {
  return (
    <div>
 <User
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dates} />
      <Statistics  stats={dates} />
      <FriendList friends={friends} />
     <TransactionHistory items={transactions} />;
    </div>
     
  );
};


User.propTypes={
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.shape({
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
  })
  
}

Statistics.propTypes = {
  id: PropTypes.string,
  label:PropTypes.string,
  percentage:PropTypes.number
}
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id:PropTypes.number
}
TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency:PropTypes.string
}
