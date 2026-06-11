import React from "react";
const yourName = "Hello, Iam Amulya";
const yourAim = "To Become A Fullstack Developer";
const funFact = "I enjoy learning React and building web applications.";
const App = () => {
 return (
 <div style={{
  border:"1px solid black",
  borderRadius:"20px",
  height:"300px",
  width:"600px",
  justifyContent:"center",
  alignItems:"center",
  display:"flex",
 margin: "50px auto", 
 padding:"20px",
 flexDirection:"column"
 }}> 
  <h1>{yourName}</h1>
  <h2>{yourAim}</h2>
  <p><strong>FunFact:</strong>{funFact}</p>
 </div>
 )
 } 
export default App