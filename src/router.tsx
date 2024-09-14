import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import Home from "./pages/home";
import Map from "./pages/map";
import Chat from "./pages/chat";
import Bookmark from "./pages/bookmark";
import Notification from "./pages/notification";
import Profile from "./pages/profile";
import Event from "./pages/event";
import Inbox from "./pages/inbox";

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
        path: "/inbox",
        element: <Inbox />,
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
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);
