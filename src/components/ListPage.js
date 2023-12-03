import React from "react";
import ToDoContainer from "./ToDoContainer";
import '../styles/ToDoComponent.css'

const ListPage = ()=>{
return(
<div className="App">
    <div className="spacingcontainer">
   <h1 className="listDay"> Saturday, December 1st</h1>
    <ToDoContainer/>
     </div>
     </div>

    )
    
}

export default ListPage