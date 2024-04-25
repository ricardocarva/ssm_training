import Counter from './Counter';
import React, { useState } from 'react';

import '../App.css';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Checking if email and password are not empty
    if (email && password) {
      setIsLoggedIn(true);
      alert('Logged in successfully!');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div className="App">
    {isLoggedIn ? (
        <h1>Welcome to our Jira Project!! You are logged in.</h1>
      ) : (
        <div className="login-container">
          <h1>Welcome to our Jira Project!</h1>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <div href="/register" class="button">
            Register Account</div>
        </div>
      )}
      {/* <Counter /> */}

    </div>
    
  );
}

export default App;
