import React from "react";
import Post from "./Post";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
function App(){
  return(
    <div >
       <h1>Instagram Feed</h1>
       <Post
        author="Amulya"
        image={image1}
     />
      <Post
        author="Amulya"
        image={image2}
     />
      <Post
        author="Amulya"
        image={image3}
     />
    </div>
  )
}
export default App