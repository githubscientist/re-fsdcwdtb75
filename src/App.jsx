function Header() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>Welcome to our React App!</p>
    </>
  )
}

// component -> reusable piece of UI
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