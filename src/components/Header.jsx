// child component
function Header(props) {

    console.log(props);

  return (
    <>
      <h1>Hello Guest!</h1>
      <p>You're {props.age} years old</p>
    </>
  )
}

export default Header;