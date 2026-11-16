import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

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

    // console.log('Logging in user...');
    // console.log(email, password);
    axios.post('http://localhost:3001/api/v1/auth/login', {
      email,
      password
    }, {
      withCredentials: true
    })
      .then(response => {
        // alert('user logged in...');
        toast.success('login successful');

        // reset the form
        setEmail('');
        setPassword('');

        // send the user to the login page
        setTimeout(() => {
          navigate('/dashboard');
        }, 500);
      })
      .catch(error => {
        toast.error(error.response?.data?.message);
      })
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