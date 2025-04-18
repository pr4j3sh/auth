import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/root";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Protected from "./components/protected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
