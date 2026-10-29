import axios from "axios";
import { useEffect, useState } from "react";

/*
  empty state setup: todos = []

  api call is made to fetch the todos -> asynchronous function

  empty list is printed in the console -> this gets executed concurrently after few micro or nano seconds

  api call gets completed
  we get data -> update it in the state todos -> update in the state causes re-rendering of the component -> refresh of the UI

  data list is printed in the console.
*/

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