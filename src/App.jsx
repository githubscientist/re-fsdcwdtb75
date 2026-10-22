// component -> reusable piece of UI

import Header from "./components/Header";

// parent component or root component
function App() {

  return (
    <>
      <Header />
      <Header />
      <Header />
    </>
  )
}

export default App;