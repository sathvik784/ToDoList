import {React, useState} from 'react'

const AddToDo = ({addTodo}) => {


   const [text, setText] = useState("");

   const handleSubmit = (e) => {
        e.preventDefault()
        const newAssignment={id: Math.random(), assignment: text, done: false}
        addTodo(newAssignment)
        setText("")
   }

   return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={text} 
                onChange={(event)=>setText(event.target.value)}
                placeholder='Add an assignment'
                style={{position:'fixed', bottom: 20, width:'93%'}}/>
                
                
                <input style={{position:'fixed', bottom: 20, right:20}} type='submit' />
            </form>
        </div>
   );
}


export default AddToDo;