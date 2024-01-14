import {React, useState} from 'react'
import ToDoComponent from "./ToDoComponent";
import AddToDo from "./AddToDo";
import { useEffect } from 'react';

const tmp_id = null
const ToDoContainer = () => {

    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/todolist/tasks');
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
    
        console.log('Received data:', data);
    
        if (data && Array.isArray(data.all_tasks)) {
          const mappedData = data.all_tasks.map(task => ({
            id: task.id,
            task: task.task, // Adjust property names based on your actual data structure
            done: task.done,
          }));
          
          setTodos(mappedData);
        } else {
          console.error('Received empty or unexpected data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []); // Empty dependency array ensures that this effect runs once when the component mounts

    const handleAddTodo = async (newTodo) => {
         const updatedTodoList = [...todos, newTodo]
         setTodos(updatedTodoList)
        
         // URL where you want to make the POST request
          const url = 'http://127.0.0.1:8000/todolist/add_tasks'; //

          // Data to be sent in the request body (can be a JSON object, FormData, etc.)
          const data = {
            //id: 1,
            task: newTodo,
            done: false
          };

          // Options for the fetch request
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Set the content type based on your data format
              // You can also include other headers if needed, like authorization headers
            },
            body: JSON.stringify(data) // Convert data to JSON string for the request body
          };

          // Make the POST request using fetch
          fetch(url, options)
            .then(response => response.json()) // Parse the response as JSON
            .then(data => {
              console.log('POST request successful:', data);
              // Handle the response data as needed
            })
            .catch(error => {
              console.error('Error making POST request:', error);
              // Handle errors
            });
            
    }

    const handleRemoveTodo = async (id) => {
        console.log(id)
        const updatedTodoList = todos.filter(todo=>todo.id!==id)
        setTodos(updatedTodoList)

        const deleteTask = async (task_id) => {
          try {
            
            const response = await fetch(`http://127.0.0.1:8000/todolist/delete_task/${task_id}`, {
              method: 'DELETE',
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log('Delete response:', data);
            // Handle the response data as needed
          } catch (error) {
            console.error('Error deleting task:', error);
            // Handle errors
          }
        }
        await deleteTask(id);
    }

    const handleCheckTodo = (id) => {
        const updatedTodoList = todos.map(todo=>{
            if (todo.id===id) {
                return {...todo, task: todo.task, done:!todo.done}
            }
            else {
                return todo
            }
        })
        setTodos(updatedTodoList)
    }
    console.log(todos)
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

/*
{todos.map(todo => (
  <div key={todo.id}>
    <p>{todo.task}</p>
    <ToDoComponent key={todo.id} event={todo} removeTodo={handleRemoveTodo} checkEvent={handleCheckTodo} />
  </div>
))}*/