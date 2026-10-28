import { Outlet } from "react-router";

const HomeWrapper = () => {
  return (
    <>
        <h1>Notes App</h1>
        <p>
          Welcome to the Notes App! This is a simple application that allows you to create, view, and manage your notes. You can register for an account or log in if you already have one. Once logged in, you can start adding your notes and keep them organized. Enjoy using the app!
      </p>
      
      <Outlet />
    </>
  )
}

export default HomeWrapper;