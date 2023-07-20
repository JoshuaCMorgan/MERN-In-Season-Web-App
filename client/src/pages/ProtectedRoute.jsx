import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  console.log(useAppContext());
  const { user } = useAppContext();
  console.log("protectedRoute", user);
  if (!user) {
    return <Navigate to="/home" />;
  }

  return children;
};
