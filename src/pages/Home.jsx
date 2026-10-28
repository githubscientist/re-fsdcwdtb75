import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  const toRegisterPage = () => {
    navigate('/register');
  }

  return (
      <>
        <button onClick={toRegisterPage}>Register</button> &nbsp; <button onClick={() => navigate('/login')}>Login</button>
      </>
  )
}

export default Home;