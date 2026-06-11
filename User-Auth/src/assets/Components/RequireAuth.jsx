// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useLocation, Navigate } from "react-router-dom";

// function RequireAuth({ children }) {
//   const auth = useContext(AuthContext);
//   const location = useLocation();

//   if (auth?.user) {
//     return children;
//   }

//   return <Navigate to="/login" replace state={{ path: location.pathname }} />;
// }

// export default RequireAuth;








import React from 'react'
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RequireAuth({children}) {
  const auth=useAuth();
  const location=useLocation();
   console.log({path: location.pathname})
   if(auth.user){
    return children;
   }
  return (
  <Navigate
      to="/login"
      state={{ path: location.pathname }}
      replace
    />
  )
}

export default RequireAuth