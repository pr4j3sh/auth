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
import ProtectedRoute from "./components/protected-route";
import Auth from "./pages/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
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
    element: (
      <ProtectedRoute>
        <Notification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/event/:eventId",
    element: (
      <ProtectedRoute>
        <Event />
      </ProtectedRoute>
    ),
  },
  {
    path: "/chat",
    element: (
      <ProtectedRoute>
        <Chat />
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);
