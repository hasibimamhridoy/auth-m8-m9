import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (!user?.email) {
    // navigate to login

    return <Navigate to="/login" replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
