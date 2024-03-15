import { UserContext } from "../context/User";
import { useContext } from "react";
const Homepage = () => {
  const { user } = useContext(UserContext);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {user.username ? (
        <h1>Welcome to Nc News, {user.name}!</h1>
      ) : (
        <h1>Welcome to Nc News!</h1>
      )}
    </div>
  );
};
export default Homepage;
