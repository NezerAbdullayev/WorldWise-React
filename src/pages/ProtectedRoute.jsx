import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/use-auth";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated,navigate]);

  return isAuthenticated ? children :null ;
}

export default ProtectedRoute;
