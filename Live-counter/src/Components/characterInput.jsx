// import React from "react";

// function Input({ text, setText }) {
//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//         rows="5"
//         cols="40"
//        style={{
//         width:"100%",
//         height:"100ox",
//        boxSizing:"border-box",
//        padding:"10px",
//        borderRadius:"1px solid white",}}/>
//     </div>
//   );
// }

// export default Input;












import React from 'react'

function CharacterInput({text,setText}) {
  return (
    <div>
        <h1
        style={{
          color:"black"
        }}>Live Character Counter</h1>
         <h2 style={{
          display:"flex",
          margin:"60px",
          marginBottom:"10px",
          color:"black"
         }}>Type Something:</h2>
      <textarea placeholder="type a text" value={text} onChange={(e)=>setText(e.target.value)} style={{
        width:"400px",
        height:"150px",
       marginBottom:"60px",
       color:"black",
       fontSize:"20px"
      }}></textarea>
      
    </div>
  )
  
}

export default CharacterInput