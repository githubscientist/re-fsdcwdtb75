import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleRegister = (event) => {
    event.preventDefault();

    // console.log('Registering user...');
    // console.log(name, email, password);
    // perform an api call
    axios
      .post('http://localhost:3001/api/v1/auth/register', {
        name,
        email,
        password
      })
      .then(() => {
        // alert('user registered...');
        toast.success('registration successful...');

        // reset the form
        setName('');
        setEmail('');
        setPassword('');

        // send the user to the login page
        setTimeout(() => {
          navigate('/login');
        }, 500);
      })
      .catch(error => {
        toast.error(error.response?.data?.message);
      })
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="name..." value={name} onChange={handleNameChange} />
        <br />
        <br />
        <input type="email" placeholder="email..." value={email} onChange={handleEmailChange} />
        <br />
        <br />
        <input type="password" placeholder="password..." value={password} onChange={handlePasswordChange} />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </div>
  )
}

export default Register;