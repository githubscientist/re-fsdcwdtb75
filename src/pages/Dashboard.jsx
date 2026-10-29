import axios from "axios";
import { useEffect, useState } from "react";

/*
  empty state is initialized

  api call is made

  component rendered

  api call completes
  data is updated in the state
  component re-rendered
  data updated in the UI
*/

const Dashboard = () => {

  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    try {
      const response = await axios.get('https://6ad21f9966cd28aed82da8b7.mockapi.io/todos');
      setTodos(response.data);
    } catch (error) {
      console.log('failed to fetch todos...try again', error) 
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          todos
            .map(todo => <li key={todo.id}>{ todo.title }</li>)
        }
      </ul>
    </div>
  )
}

export default Dashboard;