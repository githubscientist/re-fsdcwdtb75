import { useState } from "react";
import History from "./components/History";
import Reactions from "./components/Reactions";
import Button from "./components/Button";

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
      <Reactions reactions={reactions} />

      <Button handleOnClick={handleLike} likesOrDislikes={likes} />
      
      &nbsp;

      <Button handleOnClick={handleDislike} likesOrDislikes={dislikes} />
      
      <br /><br />
      
      <History clicks={clicks} />
    </div>
  )
}

export default App;