import React from 'react';
import { useState,useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate,useLocation } from 'react-router-dom';
function Login() {
const [name,setName]=useState("");
const auth=useAuth();
const navigation=useNavigate();
const location=useLocation();
console.log("location from login", location);
  const redirectPath = location.state?.path || "/";
console.log("redirectPath:",redirectPath);
function handleLogin(){
   if(name.trim()===""){
       alert("Name Cannot Be Empty");
         return;
    }
    auth.login(name)
     navigation(redirectPath,{replace:true});
}
useEffect(() => {
   console.log("auth.user updated:", auth.user);
 }, [auth.user]);
  return (
    <div>
      <h1>Welcome The User</h1>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
