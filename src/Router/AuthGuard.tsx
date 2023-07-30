import { Navigate, Outlet } from "react-router-dom";

export interface AuthGuardProps {
  isPrivate?: boolean;
}

export function AuthGuard({ isPrivate = false }: AuthGuardProps) {
  const signedIn = false;

  if (isPrivate && !signedIn) return <Navigate to="/signin" replace />;
  if (!isPrivate && signedIn) return <Navigate to="/" replace />;

  return <Outlet />;
}
