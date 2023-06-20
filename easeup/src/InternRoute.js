import React from "react";
import { Navigate, Outlet } from "react-router";

const InternRoute = ({ element: Component, ...rest }) => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  //   return userInfoString ? <Outlet /> : <Navigate to="/" />;
  const isAuthenticated = !!userInfo?.isIntern;
  console.log(isAuthenticated);
  console.log({ isAuthenticated });

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default InternRoute;
