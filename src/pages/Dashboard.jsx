import { useLoaderData, useNavigate } from "react-router";
import TodoItem from "../components/TodoItem";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Dashboard = () => {

  // const todos = useLoaderData();
  const todos = [];
  const user = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  const handleLogout = () => {
    // navigate('/logout');
    // perform an api call
    axios.post('http://localhost:3001/api/v1/auth/logout', {}, {
      withCredentials: true
    })
      .then(response => {
        toast.success('logout success');

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
      <p>{ user?.email } signed in! <button onClick={handleLogout}>logout</button> </p> 
      <h1>Todos</h1>
      <ul>
        {
          todos
            ?.map(todo => <TodoItem todo={ todo } key={todo.id} />)
        }
      </ul>
    </div>
  )
}

export default Dashboard;