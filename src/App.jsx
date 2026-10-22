import { useState } from "react";

// DO NOT MUTATE THE STATE VARIABLE DIRECTLY
// state variable
const App = () => {

  let [likes, setLikes] = useState(0);
  let [dislikes, setDislikes] = useState(0);
  
  const handleLike = () => {
    // increase the likes
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    // increase the likes
    setDislikes(dislikes + 1);
  }

  // changes in the state variable causes re-render of the component
  return (
    <div>
      <button onClick={handleLike}>
        Like { likes }
      </button>
      &nbsp;
      <button onClick={handleDislike}>
        Dislike { dislikes }
      </button>
    </div>
  )
}

export default App;