import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { FallingLines } from  'react-loader-spinner';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return <FallingLines
               color="#4fa94d"
               width="100"
               visible={true}
               ariaLabel='falling-lines-loading'
            />;
   }

   if (user && user.uid) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
