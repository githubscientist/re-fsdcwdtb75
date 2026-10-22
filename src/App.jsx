// passing data from child to parent component
// event handling -> onClick, onDblClick, onKeyDown, onKeyUp, onSubmit,..
// state variable
const App = () => {
  
  const handleClick = () => {
    console.log('button clicked');
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default App;