import { useState } from "react";
import Child from "./components/Child";

// parent has the data
const App = () => {

  const [message, setMessage] = useState('Hi from Parent');

  return (
    <>
      <Child message={message} />
    </>
  )
}

export default App;