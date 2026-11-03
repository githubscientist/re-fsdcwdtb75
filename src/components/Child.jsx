import { useUserContext } from "../contexts/UserContext";
import Child1 from "./Child1";

const Child = () => {

  // get the data from the context and use it in this component
  const { user, setUser } = useUserContext();

  console.log(user);

  return (
    <div>
      <p>Welcome {user.name}! { user.loggedIn && "You're logged in" }</p>
      <Child1 />
    </div>
  )
}

export default Child;