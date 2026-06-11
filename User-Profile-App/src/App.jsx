import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './assets/components/Home';
import About from './assets/components/About';
import Student from "./assets/components/Student";
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/about",
    element:<About/>
  }
  ,{
    path:"/student/:id",
    element:<Student/>
  }
])
function App() {
  return (
    <div>
<RouterProvider router={router}/>
    </div>
  )
}

export default App