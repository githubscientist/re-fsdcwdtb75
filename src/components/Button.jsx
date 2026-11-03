const Button = ({ handleOnClick, likesOrDislikes }) => {
  return (
    <button onClick={handleOnClick}>Like {likesOrDislikes} </button>
  )
}

export default Button;