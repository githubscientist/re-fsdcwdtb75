import axios from "axios";
import { useState } from "react"
import { data, useNavigate } from "react-router";

const TodoItem = ({ todo }) => {

    const [isDone, setIsDone] = useState(todo.isDone);
    const navigate = useNavigate();

    const listStyle = {
        listStyleType: "none",
        marginBottom: "8px"
    }

    const divStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
    }

    const handleCheckBoxChange = (event) => {
        // update the checkbox
        setIsDone(event.target.checked);

        // send the update to the server
        axios
            .put(`https://6ad21f9966cd28aed82da8b7.mockapi.io/todos/${event.target.id}`, {
                "isDone": event.target.checked
            })
            .then((response) => {
                console.log(`Todo ${todo.id} status updated to ${event.target.checked}...`);

                // navigate to the dashboard route again to fetch the latest changes
                navigate("/dashboard");
            })
    }

  return (
      <div style={divStyle}>
        <div>
              <input type="checkbox"
                  id={todo.id}
                  checked={isDone}
                  onChange={handleCheckBoxChange}
              />
        </div>
        <div>
            <li style={listStyle}>{ todo.title }</li>
        </div>
      </div>
  )
}

export default TodoItem;