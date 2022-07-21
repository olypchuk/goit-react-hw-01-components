import React from 'react';


import user from '../../src/data-json/user.json'
import dates from '../../src/data-json/data.json'
import friends from '../../src/data-json/friends.json'
import transactions from '../../src/data-json/transactions'

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





