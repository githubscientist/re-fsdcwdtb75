import Child from "./components/Child";

// parent has the data
const App = () => {

  function sendData(data) {
    console.log(data);
  }

  return (
    <>
      <h1>Message from Child:</h1> {  }
      <Child sendData={ sendData } />
    </>
  )
}

export default App;