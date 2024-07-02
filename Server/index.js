const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Student = require('./Models/Student'); 

const app = express();
const port = 3001; 

app.use(cors());
app.use(express.json());
//חיבור למונגו
mongoose.connect('mongodb+srv://avital:Av123456789@funlearningpoject.7s4o1az.mongodb.net/funlearning?retryWrites=true&w=majority&appName=FunLearningPoject')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('error', err));

//הוספת סטודנט חדש ושמירה שלו בדאטה ביס סשם סטודנטים
app.post('/SignUp', async (req, res) => {
  const { name, lastname, password, classLevel, city, age, teacherName } = req.body;
  const newStudent = new Student({ name, lastname, password, classLevel, city, age, teacherName });
  try {
    const savedStudent = await newStudent.save();
    res.json({ success: true, student: savedStudent });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});
//האזנה לשרת
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
