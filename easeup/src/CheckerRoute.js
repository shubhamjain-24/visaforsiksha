import React from "react";
import { Navigate, Outlet } from "react-router";

const CheckerRoute = ({ element: Component, ...rest }) => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  //   return userInfoString ? <Outlet /> : <Navigate to="/" />;
  const isAuthenticated = !!userInfo?.isChecker;
  console.log(userInfo);
  console.log(isAuthenticated);
  console.log({ isAuthenticated });

  //   return isAuthenticated ? <Navigate to="/adminlogin" replace /> : <Outlet />;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/SignInChecker" replace />
  );
};

export default CheckerRoute;
