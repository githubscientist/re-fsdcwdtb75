// child component
function Header({age, name}) {

  return (
    <>
        <h1>Hello {name}!</h1>
        <p>You're {age} years old</p>
    </>
  )
}

export default Header;