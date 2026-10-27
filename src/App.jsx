// state in class component -> built-in
import React, { useState } from "react";

// class App extends React.Component {

//   constructor(props) {
//     super(props);
    
//     this.state = {
//       likes: 0
//     }
//   }

//   handleLikes = () => {
//     this.setState(prevState => ({
//       likes: prevState.likes + 1
//     }))
//   }

//   render() {
//     return (
//       <button onClick={this.handleLikes}>Like { this.state.likes }</button>
//     )
//   }
// }

function App() {

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleLike}>Like { likes }</button>
  )
}

export default App;