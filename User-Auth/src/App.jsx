import React from "react";
import "./App.css";   
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import RequireAuth from "./assets/Components/RequireAuth";
import Home from "./assets/Pages/Home";
import Login from "./assets/Pages/Login";
import Dashboard from "./assets/Pages/Dashboard";
import NotFound from "./assets/Pages/NotFound";
import AuthProvider from "./assets/context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/Dashboard" element={<RequireAuth>
          <Dashboard/>
         </RequireAuth>}/>
         <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App