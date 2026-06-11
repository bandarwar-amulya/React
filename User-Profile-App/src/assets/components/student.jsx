import React from "react";
import { useParams } from "react-router-dom";
import students from "../data";

function Student() {
  const { id } = useParams();

  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{student.name}</h1>
      <p><b>Age:</b> {student.age}</p>
      <p><b>Course:</b> {student.course}</p>
      <p><b>Gender:</b> {student.gender}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>College:</b> {student.college}</p>
      <p><b>About:</b> {student.about}</p>
    </div>
  );
}

export default Student;