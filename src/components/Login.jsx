import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = (event) => {
    event.preventDefault();

    console.log('Logging in user...');
    console.log(email, password);

    alert('user logged in...');

    // reset the form
    setEmail('');
    setPassword('');

    // send the user to the login page
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email..." value={email} onChange={handleEmailChange} required />
        <br />
        <br />
        <input type="password" placeholder="password..." value={password} onChange={handlePasswordChange} required />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      
    </div>
  )
}

export default Login;