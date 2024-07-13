<<<<<<< HEAD
import React, { useState } from 'react';
import './LoginPageStudent.css';

function LoginPageStudent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
        {message && <p id="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginPageStudent;
=======
import React, { useState } from 'react';
import './LoginPageStudent.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPageStudent() {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ ID: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleIDChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,9}$/.test(value)) {
      setID(value);
      setErrors({ ...errors, ID: value.length === 9 ? '' : 'תעודת זהות חייבת להיות בדיוק 9 ספרות' });
    } else {
      setErrors({ ...errors, ID: 'תעודת זהות חייבת להיות בדיוק 9 ספרות' });
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setErrors({ ...errors, password: value.length >= 8 ? '' : 'הסיסמה חייבת להיות לפחות 8 תווים' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!ID || !password) {
      setMessage('כל השדות הם חובה');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/LoginPageStudent', {
        ID,
        password,
        userType: 'Student'
      });

      if (response.status === 200) {
        setMessage('ההתחברות הצליחה');
        setTimeout(() => {
          navigate('/StudentDashboard'); // Navigate to StudentDashboard page upon successful login
        }, 2000); // Delay the navigation by 2 seconds to show the message
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('אירעה שגיאה');
      }
    }
  };

  return (
    <div className="login-container">
      <h1>התחברות</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>:תעודת זהות</label>
          <input type="text" value={ID} onChange={handleIDChange} />
          {errors.ID && <div className="error-message">{errors.ID}</div>}
        </div>
        <div className="form-group">
          <label>:סיסמא</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <button type="submit">התחבר</button>
        {message && <p id="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginPageStudent;
>>>>>>> 692547d (Login and navigate to user Dashboard)
