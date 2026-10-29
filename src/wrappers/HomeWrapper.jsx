import { Outlet } from "react-router";

const HomeWrapper = () => {
  return (
    <>
        <h1>Todo App</h1>
        <p>
          Welcome to the Todo App! This is a simple application that allows you to create, view, and manage your todos. You can register for an account or log in if you already have one. Once logged in, you can start adding your todos and keep them organized. Enjoy using the app!
      </p>
      
      <Outlet />
    </>
  )
}

export default HomeWrapper;