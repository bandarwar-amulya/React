// import { Children, createContext,useState } from "react";
// export const AuthContext=createContext();
// import { useContext } from "react";
// import { AuthContext} from "./authContext";
// function useAuth(){
//    return useContext(AuthContext)
// }
// export const AuthProvider=({Children})=>{
// const [user,setUser]=useState(null);
// const login=(userData)=>{
//     setUser(useData);
// }
// const logout=()=>{
//     setUser(null);
// }
//  return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }










import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;