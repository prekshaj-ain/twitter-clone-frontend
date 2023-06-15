import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "./Login";

const RequireAuth = () => {
  const location = useLocation();
  const isLoggedIn = useSelector((store) => store.Auth.isLoggedIn);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RequireAuth;
