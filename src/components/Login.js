// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styles


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Update the authentication logic
        const validUsername = 'Diana';
        const validPassword = 'parola';

        if (username === validUsername && password === validPassword) {
            onLogin(username);
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
