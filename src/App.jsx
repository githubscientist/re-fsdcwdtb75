import { useState } from "react";

// controlled inputs
const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // default page behaviour: form submission triggers page reload
  const handleRegister = (event) => {
    event.preventDefault(); // default behaviour of the form

    console.log(name);

    console.log('user registered');
  }

  const changeName = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <input type="text" placeholder="name..." name="name" onChange={changeName} value={name} />
        </div>
        <br />
        <div>
          <input type="email" placeholder="email..." name="email" />
        </div>
        <br />
        <div>
          <input type="password" placeholder="password..." name="password" />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App;