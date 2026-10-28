import { useRef, useState } from "react";

const App = () => {

  // 1. changes to normal variable does not re-render the component
  // 1.1 changes will not persist across re-render

  // 2. changes to state variable causes re-rendering of the component
  // 2.2 changes will persist across re-render

  // 3. changes to useRef variable does not re-render the component
  // 3.3 changes will persist across re-render
  let temp = useRef(0);
  let [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleTemp = () => {
    temp.current++;

    console.log(temp.current);
  }

  return (
    <div>
      <button onClick={handleLike}>Like {likes}</button>
      &nbsp;
      <button onClick={handleTemp}>Temp { temp.current }</button>
    </div>
  )
}

export default App;