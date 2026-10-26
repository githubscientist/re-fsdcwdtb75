import { useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // complex state 
  const [history, setHistory] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
    setHistory([...history, 'L']);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    setHistory([...history, 'D']);
  }

  console.log(history);

  return (
    <div>
      <button onClick={handleLike}>Like {likes}</button>
      &nbsp;
      <button onClick={handleDislike}>Dislike {dislikes}</button>
    </div>
  )
}

export default App;