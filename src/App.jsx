import { useRef } from "react";

// uncontrolled component
function App() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleLogin(event) {
    event.preventDefault();

    // javascript dom way
    // const email = document.getElementById("email");
    // const password = document.getElementById("password");

    // const email = event.target.email;
    // const password = event.target.password;

    // console.log('logging in with', email.value, password.value);
    console.log('logging in with...', emailRef.current.value, passwordRef.current.value);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email..." id="email" name="email" ref={emailRef} />
        &nbsp;
        <input type="password" placeholder="password..." id="password" name="password" ref={passwordRef} />
        &nbsp;
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App;