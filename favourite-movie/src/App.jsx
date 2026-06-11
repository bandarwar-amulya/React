import React from "react";
 const  MovieTitle="Anaganaga";
const YearofRelease=2016;
const date=new Date().getFullYear();
function App(){
 
  return(
    <div style={{
      border:"1px solid black",
      color:"white",
      background:"black",
      borderRadius:"20px",
      padding:"20px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"600px",
      height:"300px",
      margin:"50px auto",
      flexDirection:"column"
    }}>
       <h1>{MovieTitle} ({YearofRelease})</h1>
  <p><i>I love Anaganaga because it portrays emotions and human relationships in a heartwarming way. The story and characters leave a lasting impression.</i></p>
  <p><b>Its been {date- YearofRelease} years since the movie was released</b></p>
    </div>
  )
}
export default App