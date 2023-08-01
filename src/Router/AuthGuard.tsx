import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

export interface AuthGuardProps {
  isPrivate?: boolean;
}

export function AuthGuard({ isPrivate = false }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (isPrivate && !signedIn) return <Navigate to="/signin" replace />;
  if (!isPrivate && signedIn) return <Navigate to="/" replace />;

  return <Outlet />;
}
