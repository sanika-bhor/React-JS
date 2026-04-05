import React, { useState } from 'react';

const Login=()=>{


    const [username, setUsername] = useState('sanikabhor');
    const [password, setPassword] = useState('sanika123');
    const handleSubmit=()=>{
        const storedCustomer = JSON.parse(localStorage.getItem('customer'));
        if (username === storedCustomer.username && password === storedCustomer.password) {
          alert("Login successful!");
        } else {
          alert("Invalid username or password. Please try again.");
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(event)=>{
                        setUsername(event.target.value);
                    }}name="username" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(event)=>{
                    setPassword(event.target.value);
                }} name="password" required />
                <br />
                <button onClick={handleSubmit} >Login</button>
            </form>
        </div>
    );
}

export default Login;