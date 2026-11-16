import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import HomeWrapper from "./wrappers/HomeWrapper";
import Dashboard from "./pages/Dashboard";
import todosLoader from "./loaders/todosLoader";
import { ToastContainer } from "react-toastify";
import authLoader from "./loaders/authLoader";

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
    loader: authLoader,
    hydrateFallbackElement: <p>Loading todos...</p>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider
        router={router}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App;