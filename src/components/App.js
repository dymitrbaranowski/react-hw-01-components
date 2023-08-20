import { Profile } from "./Profile";
imprt userItems from '../user.json'

export const App = () => {
  return (
    <div>
      <Profile items={userItems} />
    </div>
  );
};
