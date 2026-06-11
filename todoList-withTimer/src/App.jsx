// import React from 'react'
// import { useState,useEffect } from 'react';

// function App() {
//   const [input,setInput]=useState("");
//  const [task,setTask]=useState([]);
//  const [currentTime, setCurrentTime] = useState(Date.now());
//   function setHandler(e){
//     setInput(e.target.value)
//   }
//  function addTask(){
//   if (input.trim() === "") return;
//    const newTask = {
//     text: input,
//     createdAt: Date.now(),
//   };

//  setTask([...task,newTask]);
//  setInput("")
//  }
//  useEffect(() => {
//   const timer = setInterval(() => {
//     setCurrentTime(Date.now());
//   }, 1000);

//   return () => clearInterval(timer);
// }, []);
//   return (
//     <div>
//       <h1>Todo-List With Timer</h1>
//       <input type="text" placeholder='enter a new task'  value={input} onChange={setHandler} style={{
//         width:"50%",
//         height:"50px",
      
//       }}/>
//       <button onClick={addTask} style={{
//         width:"50px",
//         height:"50px",
//         textAlign:"center",
//       }}>Add</button>
//       <ul>
//      {task.map((item, index) => (
//   <li
//     key={index}
//     style={{
//       listStyle: "none",
//       marginBottom: "20px",
//     }}
//   >
//     <div>{item.text}</div>

//     <div>
//       ⏱️ {Math.floor((currentTime - item.createdAt) / 1000)} seconds ago
//     </div>
//   </li>
// ))}
// </ul>
//     </div>
//   )
// }

// export default App