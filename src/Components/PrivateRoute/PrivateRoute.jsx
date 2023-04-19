import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(loading, user);
  if (loading) {
    return (
      <>
        <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
          <progress className="progress w-56 bg-white"></progress>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRoute;
