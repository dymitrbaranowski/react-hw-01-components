import { Profile } from "./Profile/Profile";
import userItems from '../data/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from '../data/data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from '../data/transactions.json'

// test


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile items={userItems} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


