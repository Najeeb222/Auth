import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "context";
import { ROUTES } from "constant";

const NormaleRoute = () => {
  const { user } = useAuth();
  const location = useLocation();
  if (user) {
    return <Navigate to={ROUTES.HOME}  state={{ from: location }} replace />;
  }


  return <Outlet />;
};

export default NormaleRoute