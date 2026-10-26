import { useState } from "react";

// DO NOT MUTATE THE STATE VARIABLE DIRECTLY
// state variable
const App = () => {

  let [likes, setLikes] = useState(0);
  
  const handleLike = () => {
    // increase the likes
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    // atleast likes = 1
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }

  // changes in the state variable causes re-render of the component
  return (
    <div>
      <button onClick={handleDislike}>-</button>

      &nbsp;
      {likes}
      &nbsp;
      <button onClick={handleLike}>
        +
      </button>
    </div>
  )
}

export default App;