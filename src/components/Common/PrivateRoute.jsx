import React from "react";
import { useSelector } from "../../hooks/AppContext";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({ children }) {
    const location=useLocation()
  const userData = useSelector((state) => state.user.data);
  if (userData) return children;
  return <Navigate to="/login" state={location.pathname}/>;
}

export default PrivateRoute;
