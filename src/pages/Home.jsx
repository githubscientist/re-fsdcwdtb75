import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  const toRegisterPage = () => {
    navigate('/register');
  }

  return (
      <>
        <h1>Notes App</h1>
        <p>
          Welcome to the Notes App! This is a simple application that allows you to create, view, and manage your notes. You can register for an account or log in if you already have one. Once logged in, you can start adding your notes and keep them organized. Enjoy using the app!
      </p>
      
      <button onClick={toRegisterPage}>Register</button> &nbsp; <button onClick={() => navigate('/login')}>Login</button>
      </>
  )
}

export default Home;