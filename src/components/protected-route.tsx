import { Navigate } from "react-router-dom";
import { Authenticated, Unauthenticated } from "convex/react";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <Navigate to="/auth" replace />
      </Unauthenticated>
    </>
  );
}
