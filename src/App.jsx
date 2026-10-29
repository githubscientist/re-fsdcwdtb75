import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import HomeWrapper from "./wrappers/HomeWrapper";
import Dashboard from "./pages/Dashboard";
import todosLoader from "./loaders/todosLoader";

// setup router object
const router = createBrowserRouter([
  // each object is a route
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: todosLoader,
    hydrateFallbackElement: <p>Loading todos...</p>
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