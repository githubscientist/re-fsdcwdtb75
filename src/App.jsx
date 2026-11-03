import Child from "./components/Child";
import Child1 from "./components/Child1";
import { useState } from "react";

// parent has the data
const App = () => {

  const [message, setMessage] = useState('');

  function sendData(data) {
    setMessage(data);
  }

  return (
    <>
      <h1>Message from Child:</h1> { message }
      <Child sendData={sendData} />
      <Child1 message={ message } />
    </>
  )
}

export default App;