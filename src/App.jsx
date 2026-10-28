import { useState } from "react";

const App = () => {

  // 1. changes to normal variable does not re-render the component
  // 1.1 changes will not persist across re-render
  // 2. changes to state variable causes re-rendering of the component
  let temp = 0;
  let [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleTemp = () => {
    temp++;
    console.log(temp);
  }

  return (
    <div>
      <button onClick={handleLike}>Like {likes}</button>
      &nbsp;
      <button onClick={handleTemp}>Temp { temp }</button>
    </div>
  )
}

export default App;