// component -> reusable piece of UI

import Header from "./components/Header";

// parent component or root component
// passing data from one component to another component
// parent component to child component

function App() {

  const age = 25;

  return (
    <>
      <Header age={age} />
      <Header />
      <Header />
    </>
  )
}

export default App;