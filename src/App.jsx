import { useState } from "react";

// controlled component
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  function handleLogin(event) {
    event.preventDefault();

    
    console.log('logging in with...',email, password );
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange() {
    setPassword(event.target.value);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email..." value={email} onChange={handleEmailChange} />
        &nbsp;
        <input type="password" placeholder="password..."  value={password} onChange={handlePasswordChange} />
        &nbsp;
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App;