// import React from "react";
// import {useAuth} from "../context/useAuth";
// import {useLocation} from "react-router-dom";
// function Dashboard(){
//     const auth=useAuth();
//     const location=useLocation();
//     function handleLogout(){
//         auth.logout();
//     }
//     return(
//         <div>
//         <span>"Welcome"+auth.user</span>
//         <button onClick={handleLogout}>Sign Out</button>
//         </div>
//     )
// }



import React from 'react'
import { useAuth } from '../Context/AuthContext';
import { useLocation } from 'react-router-dom';
function Dashboard() {
    const auth=useAuth();
const location=useLocation();
console.log("Dashboard Location",location);
const handleLogout=()=>{
    auth.logout();
}
  return (
    <div>
        <span>Welcome{auth.user}</span>
        <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default Dashboard