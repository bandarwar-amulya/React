import React from "react";

function Card({ member, toggleAvailability }) {
  return (
    <>
    <div style={{
      border:"1px solid blue",
      borderRadius:"20px",
      pading:"20px",
      width:"300px",
      height:"200px",
      textAlign:"center",
      backgroundColor:"white",
      margin:"10px",
      boxShadow:"2px 2px 8px rgba(0,0,0,0.1)",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <h2>{member.name}</h2>
      <p><strong>Role:</strong>{member.role}</p>
      <p><b>Status:</b>{member.available ? "Available" : "Not Available"}</p>
       <div className="btn">
      <button onClick={() => toggleAvailability(member.id)}
        style={{
          backgroundColor:"blue",
          color:"white"
        }}>
        Toggle Button
      </button>
      </div>
      </div>
    </>
  );
}

export default Card;