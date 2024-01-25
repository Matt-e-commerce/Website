// PrivateRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const getAuthToken = () => {
    // Retrieve the token from local storage
    return localStorage?.getItem('token');
  };
  const authToken = getAuthToken()?.replace(/"/g, '');

  return authToken ? (
    React.cloneElement(element, rest)
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
