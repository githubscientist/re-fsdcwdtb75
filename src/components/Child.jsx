import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import Child1 from "./Child1";

const Child = () => {

  // 3. consume the context
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  const handleLogout = () => {
    setUser({
      name: 'Guest',
      loggedIn: false,
    })
  }

  return (
    <div>
      <p>Welcome {user.name}! 
        { user.loggedIn ? "You are logged in" : "You are logged out"}
      </p>
      <Child1 />
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Child;