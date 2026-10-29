import { useLoaderData } from "react-router";

/*
  empty state is initialized

  api call is made
  api call completes

  component rendered
*/

const Dashboard = () => {

  const todos = useLoaderData();

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