import { Navigate } from "react-router-dom";
import { userStore } from "../lib/store";

export default function Protected({ children }) {
  const { user, token } = userStore();

  return user && token ? children : <Navigate to="/" replace />;
}
