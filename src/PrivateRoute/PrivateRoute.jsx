import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default PrivateRoute;
