import { useState } from "react";
function Post(props){
const [likes,setLikes]=useState(0);
function handleLike(){
setLikes(likes+1);
}
  console.log(props.image);

return(
  <div style={{
      border:"1px solid black",
      borderRadius:"20px",
      Gap:"100px",
      padding:"20px",
      height:"450px",
      width:"300px",
      margin:"50px",
     marginLeft:"250px"
    }}>
    
    <h1>{props.author}</h1>
     <img
        src={props.image}
        alt={props.author}
        width="300"
      />
    <button onClick={handleLike}  style={{
      display:"block"
    }}>
     ❤️ likes{likes}
    </button>
  </div>
)
}
export default Post