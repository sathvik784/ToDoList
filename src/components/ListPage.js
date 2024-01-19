import React, { useEffect } from "react";
import ToDoContainer from "./ToDoContainer";
import '../styles/ToDoComponent.css'

const ListPage = () => {

    useEffect(() => {
        (
            async() => {
                /*// URL where you want to make the POST request
                const url = 'http://127.0.0.1:8000/account/user/'
                const options = {
                    headers: {
                        'Content-Type': 'application/json', // Set the content type based on your data format
                        // You can also include other headers if needed, like authorization headers
                    },
                    credentials: 'include',
                };  
                const response = await fetch(url, options)     
                const data = await response.json
                console.log(response)*/
                try {
                const response = await fetch('http://127.0.0.1:8000/account/user/', {
                    headers: {
                        'Content-Type': 'application/json', // Set the content type based on your data format
                        // You can also include other headers if needed, like authorization headers
                    },
                    credentials: 'include',
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                
                  const data = await response.json();
                  console.log(data); // Handle the retrieved data as needed
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            }
        )()
      }, []);

    return(

    <div className="App">    
        <div className="spacingcontainer">
            <ToDoContainer/>
        </div>
    </div>

    )
    
}

export default ListPage