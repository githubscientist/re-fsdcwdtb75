import { useLoaderData } from "react-router";
import TodoItem from "../components/TodoItem";

const Dashboard = () => {

  const todos = useLoaderData();

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          todos
            .map(todo => <TodoItem todo={ todo } key={todo.id} />)
        }
      </ul>
    </div>
  )
}

export default Dashboard;