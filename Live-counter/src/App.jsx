// import React, { useState } from 'react'
//  import Input from "./Components/characterInput.jsx";
//  import Stats from "./Components/characterStats.jsx";  
// function App() {
//   const [text,setText]=useState("");
//   return (
//     <div>
//            <h1>Character Counter</h1>
//       <Input text={text} setText={setText}/>
//       <Stats text={text}/>
//     </div>
//   )
// }

// export default App
















import React from "react";
import { useState } from "react";
import CharacterInput from "./Components/characterInput";
import CharacterStats from "./Components/characterStats";
function App(){
  const [text,setText]=useState("");
  return(
    <div style={{
      border:"1px solid black",
      width:"500px",
      margin:"15px auto",
      backgroundColor:"skyblue",
      color:"white"
    }}>
      <CharacterInput text={text} setText={setText}/>
      <CharacterStats text={text}/>
    </div>
  )
}
export default App