import React from "react";
import { useNavigate } from "react-router-dom";
import students from "./../data";
import { FaUser } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title" style={{
        fontSize:"40px",
      }}>User Directory</h1>

      <div className="list">
        {students.map((student) => (
          <div
            key={student.id}
            className="card"
            onClick={() => navigate(`/student/${student.id}`)}
         style={{
            border:"1px solid black",
            borderRadius:"10px",
            width:"200px",
            margin:"15px auto",
            height:"30px"
         }} >
            <FaUser className="icon" />
            <span>{student.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;