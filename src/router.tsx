import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import Home from "./pages/home";
import Map from "./pages/map";
import Chat from "./pages/chat";
import Bookmark from "./pages/bookmark";
import Notification from "./pages/notification";
import Profile from "./pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
    ],
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
