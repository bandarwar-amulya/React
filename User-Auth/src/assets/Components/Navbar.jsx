import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from 'react'

function Navbar() {
   const auth=useAuth();
   const handleLogout=()=>{
      auth.logout()
   }
  return (
    <div className="navbar">
      <div className="left">Auth Demo</div>
      <div className="right">
         <Link to="/">Home</Link>
         {auth.user ?(
            <>
         <Link to="/Dashboard">Dashboard</Link>
         <span>{auth.user}</span>
         <button onClick={handleLogout}>Logout</button>
         </>
        ):(
         <Link to="/login">Login</Link>
        ) }
      </div>
    </div>
  )
}

export default Navbar
