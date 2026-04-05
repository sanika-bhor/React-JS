import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register=()=>{
    const navigate=useNavigate();
    

    const[username,setUsername]=useState('sanika');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit=()=>{
       alert(`Registration successful! Username: ${username}, Email: ${email}`);
       localStorage.setItem('customer', JSON.stringify({ username, email, password }));
       navigate("/login");
     
    }

    return (
      <div>
        <h1>Register</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} name="password" onChange={(event)=>{
            setPassword(event.target.value);
          }} required />
          <br />
          <button onClick={handleSubmit}>Register</button>
        </form>
      </div>
    );
}
export default Register;