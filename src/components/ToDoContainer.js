import {React, useState} from 'react'
import ToDoComponent from "./ToDoComponent";
import AddToDo from "./AddToDo";

const listData = [
    {
        id: 1,
        assignment: "website",
        done: false
    },
    {
        id: 2,
        assignment: "hw",
        done: false
    }
]

const ToDoContainer = () => {

    const [todos, setTodos] = useState(listData);

    const handleAddTodo = (newTodo) => {
         const updatedTodoList = [...todos, newTodo]
         setTodos(updatedTodoList )
    }

    const handleRemoveTodo = (id) => {
        const updatedTodoList = todos.filter(todo=>todo.id!==id)
        setTodos(updatedTodoList)
    }

    const handleCheckTodo = (id) => {
        const updatedTodoList = todos.map(todo=>{
            if (todo.id===id) {
                return {...todo, assignment: todo.assignment, done:!todo.done}
            }
            else {
                return todo
            }
        })
        setTodos(updatedTodoList)
    }

    return(
        <div className='container'>
            {todos.map(todo => (
                <ToDoComponent key={todo.id} event={todo} removeTodo={handleRemoveTodo} checkEvent={handleCheckTodo} />
                )
            )}
            <AddToDo addTodo={handleAddTodo}/>
            
        </div>
    );
}

export default ToDoContainer;