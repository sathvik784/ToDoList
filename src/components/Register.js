import React, { useState } from "react";
import ListPage from './ListPage';
import { Link } from "react-router-dom";
//import '../styles/Login.css'
import '../styles/Register.css';
import '../styles/Register.css';
    
const Register = () => {

    const signInButtonStyle = {
      backgroundColor: '#006492',
      color: 'white',
      border: '1px solid #006492',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
    };

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState(""); 
    const [isRegistered, setRegistered] = useState(false);
    
    const handleRegister = () => {
        // URL where you want to make the POST request
        const url = 'http://127.0.0.1:8000/account/register/'; 

        console.log(username)
        const data = {
          username: username,
          email: email,
          password1: password,
          password2: password2
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
            
            <h2>Register</h2>
            
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
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <label htmlFor="password2">Confirm Password:</label>
            <input
                type="password"
                id="password2"
                name="password2"
                placeholder="Enter your Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
            />
            
            
            <Link to='/listpage' style={{ textDecoration: 'none' }}>
              <button type="submit" style={signInButtonStyle} onClick={handleRegister}>
                Register
              </button>
            </Link>
            
        </div>
    );
};
export default Register;