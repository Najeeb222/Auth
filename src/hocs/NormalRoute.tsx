import React, { useContext } from "react";
import { ROUTES } from "constant";
import { useAuth } from "context";
import { Navigate, Outlet } from "react-router";





const NormalRoutes: React.FC = () => {

  const { user } = useAuth()

  console.log(user, 'this is normale route user')

  return !user?.email || user.firstName ? <Outlet /> : <Navigate to={ROUTES.HOME} />;
};

export default NormalRoutes;