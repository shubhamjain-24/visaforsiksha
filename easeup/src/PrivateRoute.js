

import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  //   return userInfoString ? <Outlet /> : <Navigate to="/" />;
  const isAuthenticated = userInfo?.token;
  console.log("Eyyyyy");
  console.log({ isAuthenticated });

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
