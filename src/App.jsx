const App = () => {

  // default page behaviour: form submission triggers page reload
  const handleRegister = (event) => {
    event.preventDefault(); // default behaviour of the form

    // uncontrolled inputs
    console.log(event.target.name.value, event.target.email.value, event.target.password.value);

    console.log('user registered');
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <input type="text" placeholder="name..." name="name" />
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