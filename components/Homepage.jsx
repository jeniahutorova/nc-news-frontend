import { UserContext } from "../context/User";
import { useContext } from "react";
const Homepage = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <h1>Welcome to Nc News, {user.username}!</h1>
      ) : (
        <h1>Welcome to Nc News!</h1>
      )}
    </div>
  );
};
export default Homepage;
