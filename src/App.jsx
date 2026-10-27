// state in class component -> built-in
import React from "react";

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

  render() {
    return (
      <button onClick={this.handleLikes}>Like { this.state.likes }</button>
    )
  }
}

export default App;