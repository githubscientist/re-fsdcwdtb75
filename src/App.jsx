import { useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  }

  return (
    <div>
      <button onClick={handleLike}>Like {likes}</button>
      &nbsp;
      <button onClick={handleDislike}>Dislike {dislikes}</button>
    </div>
  )
}

export default App;