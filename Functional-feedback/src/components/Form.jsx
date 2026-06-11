import React from 'react'
import { useState } from 'react'
function Form() {
  const [formData, setFormData] = useState({
  name: "",
  feedback: ""
});
function handleChange(e) {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });
}
  const [arrys,setarry]=useState([]);
  function handleSubmit(e){
    e.preventDefault();
  
  setarry([...arrys, formData]); setFormData({ name: "", feedback: "" });
  }
  return (
   
    <div>
      <h1 style={{
          display:"flex",
          margin:"10px",
          marginBottom:"30px"
        }}>feedback collector</h1>
       <form onSubmit={handleSubmit}>
        <h2 style={{
          display:"flex",
            margin:"10px",
            marginBottom:"10px",
            
        }}>Name:</h2>
      <input type="text" placeholder="enter a text" name="name" value={formData.name} onChange={handleChange} required style={{
        display:"flex",
         margin:"10px",
         width:"300px",
         height:"30px"      }}/>
         <h2 style={{
          display:"flex",
            margin:"10px",
            marginBottom:"10px", 
        }}>Feedback:</h2>
      <input type="text" placeholder="enter a feedback" name="feedback" value={formData.feedback} onChange={handleChange} required style={{
        display:"flex",
        margin:"10px",
         width:"300px",
         height:"30px" ,
         marginBottom:"20px"
      }}/>
      <button type="submit" style={{
        display:"flex",
         margin:"10px"
      }}>Submit</button>
      {arrys.map((item,index)=>(
     <div key={index} >
      <h3 style={{
      border:"1px solid black",
      borderRadius:"10px",
      display:"flex",
      width:"300px",
      height:"30px",
      color:"black",
      backgroundColor:"skyblue"
     }}>{item.name}</h3>
      <h3 style={{
      border:"1px solid black",
      borderRadius:"10px",
      display:"flex",
      width:"300px",
      height:"30px",
      color:"black",
      backgroundColor:"skyblue"
     }}>{item.feedback}</h3>
     </div>
      ))}
       </form>
    </div>
   
    
  )
}

export default Form
