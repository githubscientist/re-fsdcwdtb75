import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://6ad21f9966cd28aed82da8b7.mockapi.io/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.log('failed to fetch todos...try again', error))
  }, []);

  console.log(todos);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard;