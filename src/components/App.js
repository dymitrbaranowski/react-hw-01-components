import { Profile } from "./Profile";
import userItems from '../user.json';

export const App = () => {
  return (
    <div>
      <Profile items={userItems} />
    </div>
  );
};
