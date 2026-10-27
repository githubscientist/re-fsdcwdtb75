// state in class component -> built-in
import { useEffect, useState } from "react";

function App() {

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  // componentDidMount
  // executes when the component mounted 
  // and whenever the component is updated
  useEffect(() => {
    console.log('component mounted');
  });

  return (
    <button onClick={handleLike}>Like { likes }</button>
  )
}

export default App;