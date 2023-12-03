import { useAuth } from "../context/authcontext";
import { Navigate, useLocation } from "react-router";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user } = useAuth();
  if (!user) {
    return (
      <Navigate replace={true}
        to="/auth/login"
        state={{
          return_url: location.pathname +location.search,
        }}
      />
    );
  }
  return children;
};

export default PrivateRoute;
