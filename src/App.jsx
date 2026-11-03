import Child from "./components/Child";
import UserProvider from "./contexts/UserContext";

const App = () => {

  return (
    <UserProvider>
      <Child />
    </UserProvider>
  )
}

export default App;