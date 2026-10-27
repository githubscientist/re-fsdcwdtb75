// state in class component -> built-in
import { useEffect, useState } from "react";

function App() {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  }

  // componentDidMount
  // executes when the component mounted 
  // component is updated using states
  useEffect(() => {
    console.log('component mounted');
  }, [likes]);

  return (
    <>
      <button onClick={handleLike}>Like {likes}</button>
      &nbsp;
      <button onClick={handleDislike}>Dislike {dislikes}</button>
    </>
  )
}

export default App;