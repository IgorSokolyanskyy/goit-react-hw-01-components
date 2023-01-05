import FriendList from './FriendList/FriendList';
import Statistics from './Statistics/Statistics';
import Profile from './Profile/Profile';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { user, data, friends, transactions } from 'data/index.js';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
