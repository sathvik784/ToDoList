import {React, useState} from 'react'

const AddToDo = ({addTodo}) => {
   const [text, setText] = useState("");

   const handleSubmit = (e) => {
        e.preventDefault()
        const newAssignment={id: Math.random(), task: text, done: false}
        addTodo(newAssignment)
        setText("")
   }

   return (
        <div className='taskCard'>
            <form onSubmit={handleSubmit}>
                <input id = "addTaskText" type='text' value={text} 
                onChange={(event)=>setText(event.target.value)}
                placeholder='Add an assignment'
               />
                <input id = "addTaskButton"type='submit' value={"+"} />
            </form>
        </div>
   );
}


export default AddToDo;