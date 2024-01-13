import React from "react";
import  '../styles/ToDoComponent.css'


const ToDoComponent = ({event,removeTodo, checkEvent}) => {
    return(

        <div className= 'taskCard' >
            <input type="checkbox" style={{cursor:"pointer"}} onChange={()=>{checkEvent(event.id)}} checked={event.done}/>
            <span style={{ margin: 10 }}>{event.task}</span>
            <span className="deleteCard"
            style={{ cursor:"pointer"}} 
            onClick={()=>{removeTodo(event.id)}}>x
            </span>
        </div>
    );
}

export default ToDoComponent;
