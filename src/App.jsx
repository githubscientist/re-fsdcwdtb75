import Child from "./components/Child";
import UserProvider from "./contexts/UserProvider";

const App = () => {

  return (
    <UserProvider>
      <>
        
        <Child />
      </>
    </UserProvider>
  )
}

export default App;