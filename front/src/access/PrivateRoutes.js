import { Navigate } from "react-router-dom";

const PrivateRoutes = ({
    user,
    redirectPath = '/',
    children,
  }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

export default PrivateRoutes;
