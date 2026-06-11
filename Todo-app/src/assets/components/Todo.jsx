import React, { useState } from 'react'
function Todo() {
    const [tasks,setTask]=useState([{id: 1, text: "complete “assignment5", completed: false}]);
    const [newTask,setnewTask]=useState("");
    function  handleChange(event){
        setnewTask(event.target.value);
    }
    function  handleAdd(e){
        if(newTask!==""){
           const taskObj={ 
                id:Date.now(),
                text:newTask,
                completed:false
           }   
           setTask([...tasks,taskObj]);
           setnewTask("")       
        }
    }
    function handleCheck(id){
        const updateCheck=tasks.map((task)=>
       task.id==id?{...task,completed:!task.completed}:task
        )
        setTask(updateCheck);
    }
    function handleDelete(id){
        const updateTask=tasks.filter((task)=>
task.id!==id
    );
    setTask(updateTask)
}
  return (
    <div>
    <input type="text" placeholder='enter a task' value={newTask} onChange={handleChange}/>
    <button onClick={handleAdd}>Add</button>
     {tasks.map((task) => (
      <div key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleCheck(task.id)}
        />
        <span>{task.text}</span>
        <button onClick={()=>handleDelete(task.id)} style={{
            border:"1px solid black",
            left:"300px",
            right:"300px"
        }}>Delete</button>
      </div>
    ))}
    </div>
  )
}

export default Todo