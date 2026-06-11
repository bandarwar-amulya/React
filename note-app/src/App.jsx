import React from "react";
import { useState } from "react";
function App(){
  const [input,setInput]=useState("");
  const [notes,setNotes]=useState(["learn react",
   "complete assignment",
   "practise usestate"]);
  function hanleButton(e){
    setInput(e.target.value);
  }
  function addNote(){
    setNotes([...notes,input]);
    setInput("")
  }
  return(
    <div>
      <h1 style={{
        border:"1px solid black",
        backgroundColor:"blue",
        color:"white",
        height:"100px",
        textAlign:"center",
        alignItems:"center",
        display:"flex",
        justifyContent:"center"
      }}>Nav</h1>
      <input type="text" placeholder="Type Your Note.." value={input} onChange={hanleButton} style={{
        border:"1px solid black",
        width:"200px",
        height:"50px",
        borderRadius:"20px",
      }}/>
      <button onClick={addNote}  style={{
        backgroundColor:"blue",
        color:"white",
        border:"1px solid black",
        borderRadius:"20px",
        margin:"10px",
        width:"40px",
        height:"40px"
      }}>+</button>
      {notes.map((note)=>(
        
  <p style={{
    border:"1px solid black",
    borderRadius:"20px",
    width:"200px",
    height:"50px",
    margin:"10px"
  }}>{note}</p>
))}
    </div>
  )
}
export default App