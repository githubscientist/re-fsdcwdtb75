import { createBrowserRouter, RouterProvider } from "react-router";

// setup router object
const router = createBrowserRouter([
  // each object is a route
  {
    path: "/",
    element: <h1>Home</h1>
  },
  {
    path: "/courses",
    element: <h1>Courses</h1>
  }
]);

const App = () => {
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App;