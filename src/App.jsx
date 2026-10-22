// component -> reusable piece of UI

import Header from "./components/Header";

// parent component or root component
// passing data from one component to another component
// parent component to child component

function App() {

  return (
    <>
      <Header age={25} name={'Krish'} />
      <Header age={33} name={'Murugan'} />
      <Header age={37} name={'Prakash'} />
    </>
  )
}

export default App;