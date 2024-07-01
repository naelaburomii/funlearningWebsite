import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [classLevel, setClassLevel] = useState(""); // New state for class
  const [city, setCity] = useState(""); // New state for city
  const [age, setAge] = useState(""); // New state for age
  const [teacherName, setTeacherName] = useState(""); // New state for teacher's name

  const collectData = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch('http://localhost:3001/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, lastname, password, classLevel, city, age, teacherName })
      });

      if (result.ok) {
        const data = await result.json();
        console.log('Server response:', data);
        localStorage.setItem("Student", JSON.stringify(data));
      } else {
        console.error('Server response failed:', result.status);
      }
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  }

  return (
    <div className='signup-container'>
      <form onSubmit={collectData}>
        <h2>הרשמה</h2>
        <div className='mb-3'>
          <label className='form-label'>שם</label>
          <input type='text' className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>שם משפחה</label>
          <input type='text' className='form-control'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>סיסמא</label>
          <input type='password' className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>כיתה</label>
          <select className='form-control'
            value={classLevel}
            onChange={(e) => setClassLevel(e.target.value)}>
            <option value=''>בחר כיתה</option>
            <option value='ד'>כיתה ד</option>
            <option value='ה'>כיתה ה</option>
            <option value='ו'>כיתה ו</option>
          </select>
        </div>
        <div className='mb-3'>
          <label className='form-label'>עיר</label>
          <input type='text' className='form-control'
            value={city}
            onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>גיל</label>
          <input type='number' className='form-control'
            value={age}
            onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>שם המורה</label>
          <input type='text' className='form-control'
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)} />
        </div>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
