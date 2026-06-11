// import Card from "./Card.jsx";
// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [members,setmembers]=useState([
//     {
//       id: 1,
//       name: "Vinay",
//       role: "Frontend Intern",
//       available: true,
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       role: "Backend Intern",
//       available: false,
//     },
//     {

//       id: 3,
//       name: "Priya",
//       role: "UI Designer",
//       available: true,
//     },
//   ]);
//   function toggleAvailability(id) {
//   setmembers(
//     members.map((member) =>
//       member.id === id
//         ? { ...member, available: !member.available }
//         : member
//     )
//   );
// }
//   const availableCount = members.filter(
//   (member) => member.available
// ).length;
// return(
//   <div style={{
//    display:"flex",
//       flexDirection:"column",
//       alignItems:"center",
//       gap:"16px",
//       textAlign:"center"
//   }}>
//     <h1>Team Members</h1>
//     <h2>Available:{availableCount}/{members.length}</h2>
   
//    {members.map((member)=>(
//   <Card
//     key={member.id}
//     member={member}
//     toggleAvailability={toggleAvailability}
//   />
// ))}
//   </div>
// )
// }

// export default App
    









import React, { useState } from 'react'
function App() {
  const [members,setMembers]=useState([
    {
       id:1,name:"amulya",role:"web development",availability:true
    },

    {
      id:2,name:"siri",role:"designer",availability:false
    },
    {
      id: 3,name: "Rahul",role: "Backend Intern",availability: false,
    }
]);
const availableCount=members.filter((member)=>
member.availability).length;
function handleToggle(id) {
  const updatedMembers = members.map((member) =>
    member.id === id
      ? { ...member, availability: !member.availability }
      : member
  );

  setMembers(updatedMembers);
}
  
  return (
    <div>
      <h1>Team Members</h1>
       <h3>Available:{availableCount}/{members.length}</h3>
   {members.map((member)=>(
    <div key={member.id} style={{
      border:"1px solid black",
      borderRadius:"20px",
     width:"300px",
     margin:"15px auto",
     height:"140px",
    }}>
      <h2 style={{
        color:"black",
        fontSize:"30px"
      }}>{member.name}</h2>
      <p><b style={{
        color:"black",
        fontSize:"18px"
      }}>Role:</b>{member.role}</p>
      <p><b style={{
        color:"black",
        fontSize:"18px"
      }}>Status:</b>{member.availability?"available":"not available"}</p>
     <button onClick={()=>handleToggle(member.id)}
      style={{
        backgroundColor:"darkskyblue",
        color:"balck",
        borderRadius:"20px"
      }}>ToggleAvailability</button>
    </div>
   ))}
    </div>
  )
}

export default App