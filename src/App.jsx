import { useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [clicks, setClicks] = useState([]);
  const [reactions, setReactions] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    setClicks([
      ...clicks,
      'L'
    ]);
    setReactions(reactions + 1);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    setClicks([
      ...clicks,
      'D'
    ]);
    setReactions(reactions + 1);
  }

  return (
    <div>
      <h1>Reactions: { reactions }</h1>
      <button onClick={handleLike}>Like {likes} </button>
      &nbsp;
      <button onClick={handleDislike}>Dislike {dislikes}</button>
      <br /><br />
      <p>History of Clicks: { clicks.join(', ') }</p>
    </div>
  )
}

export default App;