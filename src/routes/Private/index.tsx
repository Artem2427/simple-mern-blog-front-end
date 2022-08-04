import React, { FC, ReactNode } from "react";

import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component,
  isAuthenticated,
}) => {
  const token = localStorage.getItem("token");

  return (
    <div>{isAuthenticated || token ? component : <Navigate to="/login" />}</div>
  );
};

export default PrivateRoute;
