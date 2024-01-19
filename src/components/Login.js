import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
        // URL where you want to make the POST request
        const url = 'http://127.0.0.1:8000/account/login/'; 

        const data = {
          username: username,
          password: password
        }
        // Options for the fetch request
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Set the content type based on your data format

            // You can also include other headers if needed, like authorization headers
          },
          body: JSON.stringify(data) // Convert data to JSON string for the request body
        };

        // Make the POST request using fetch
        fetch(url, options)
          .then(response => response.json()) // Parse the response as JSON
          .then(data => {
            console.log('Registration request successful:', data);
            // Handle the response data as needed
            
          })
          
          .catch(error => {
            console.error('Error making registration request:', error);
            // Handle errors
          });
        
    };
    
    return (
        <div className="login-container">
            <h2>Login</h2>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
export default Login;