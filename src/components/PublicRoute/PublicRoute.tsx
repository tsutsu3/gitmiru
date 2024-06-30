import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@context/useAuth";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
