// state in class component -> built-in
import React, { useState } from "react";

// lifecycle methods: class components
class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }))
  }

  // component mounted
  // we can use this method to perform side effects after the component has been mounted
  componentDidMount() {
    console.log("Component mounted");
  }

  // component updated
  // we can use this method to perform side effects after the component has been updated
  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
  }

  // component will unmount
  // we can use this method to perform cleanup before the component is removed from the DOM
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <button onClick={this.handleLikes}>Like { this.state.likes }</button>
    )
  }
}

// function App() {

//   const [likes, setLikes] = useState(0);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   }

//   return (
//     <button onClick={handleLike}>Like { likes }</button>
//   )
// }

export default App;