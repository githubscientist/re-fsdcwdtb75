const App = () => {

  // 1. changes to normal variable does not re-render the component
  let likes = 0;

  const handleLike = () => {
    likes++;

    console.log(likes);
  }

  return (
    <div>
      <button onClick={handleLike}>Like { likes }</button>
    </div>
  )
}

export default App;