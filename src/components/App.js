import { Profile } from "./Profile/Profile";
import userItems from './Profile/user.json';

export const App = () => {
  return (
    <div>
      <Profile items={userItems} />
    </div>
  );
};
