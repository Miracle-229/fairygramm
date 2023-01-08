import React from "react";
import { Navigate, useLocation } from "react-router-dom";


export const RequireRecordedAuth = ({ children }) => {
  const location = useLocation();
  const login = localStorage.getItem("newUser");
  if (login) {
    return <Navigate to="/home" state={{ from: location }}></Navigate>;
  }
  return children;
};

export default RequireRecordedAuth;
