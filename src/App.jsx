// uncontrolled component
function App() {

  function handleLogin(event) {
    event.preventDefault();

    // javascript dom way
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    console.log('logging in with', email.value, password.value);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email..." id="email" />
        &nbsp;
        <input type="password" placeholder="password..." id="password" />
        &nbsp;
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App;