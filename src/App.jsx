// passing data from child to parent component
// event handling -> onClick, onDblClick, onKeyDown, onKeyUp, onSubmit,..
// state variable
const App = () => {

  let likes = 0;
  
  const handleLike = () => {
    // increase the likes
    likes++; // likes = likes + 1
    console.log(likes);
  }

  // changes in the ordinary variable does not re-render the component
  return (
    <div>
      <button onClick={handleLike}>
        Like { likes }
      </button>
    </div>
  )
}

export default App;