// hocs/SecureRoute.tsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from 'constant';
import { useAuth } from 'context';


 const SecureRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user?.email) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
export default  SecureRoute
