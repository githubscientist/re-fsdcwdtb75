import { useState } from "react";
import { useNavigate } from "react-router";

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

    console.log('Registering user...');
    console.log(name, email, password);

    alert('user registered...');

    // reset the form
    setName('');
    setEmail('');
    setPassword('');

    // send the user to the login page
    setTimeout(() => {
      navigate('/login');
    }, 500);
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
    </div>
  )
}

export default Register;