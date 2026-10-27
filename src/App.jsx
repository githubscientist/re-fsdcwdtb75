const App = () => {
  return (
    <div style={{ border: "1px solid black", padding: "8px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Register</h1>
      <form style={{  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div>
          <input type="text" placeholder="name..." />
        </div>
        <br />
        <div>
          <input type="text" placeholder="email..." />
        </div>
        <br />
        <div>
          <input type="text" placeholder="password..." />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App;