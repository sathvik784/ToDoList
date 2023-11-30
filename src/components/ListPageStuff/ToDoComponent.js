import React from "react";

const ToDoComponent = ({event,removeTodo, checkEvent}) => {

    return(
        <div>
            <input type="checkbox" style={{cursor:"pointer"}} onChange={()=>{checkEvent(event.id)}} checked={event.done}/>
            <span style={{ margin: 10 }}>{event.assignment}</span>
            <span 
            style={{position:"fixed", right:30, cursor:"pointer"}} 
            onClick={()=>{removeTodo(event.id)}}>
                x</span>
            <hr />

            
        </div>
    );
}

export default ToDoComponent;
