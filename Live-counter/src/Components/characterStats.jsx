// import React, { useState, useEffect } from "react";

// function Stats({ text }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//       console.log("Text:", text);
//     setCount(text.length);
//   }, [text]);

//   return (
//     <div>
//       <h3>Character Count: {count}</h3>

//       {count > 100 && (
//         <p>Warning: Character limit exceeded!</p>
//       )}
//     </div>
//   );
// }

// export default Stats;







import React from 'react'
import { useState,useEffect } from 'react'
function CharacterStats({text}) {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    setCount(text.length);
  },[text])
  return (
    <div>
     
<h3 style={{
  border:"1px solid black",
  width:"300px",
  height:"50px",
  margin:"15px auto",
 padding:"20px",
 backgroundColor:"white",
 color:"black"
}}>Character Count:{count}</h3>
{count>100&&(<p>Warning:Character limit exceeded!</p>)}
    </div>
  )
}

export default CharacterStats