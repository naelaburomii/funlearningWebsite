<<<<<<< HEAD
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
=======
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const { User, Student, Parent, Teacher } = require('./Models/User');


const app = express();
const port = 3001; 

app.use(cors());
app.use(express.json());
//חיבור למונגו
mongoose.connect('mongodb+srv://avital:Av123456789@funlearningpoject.7s4o1az.mongodb.net/funlearning?retryWrites=true&w=majority&appName=FunLearningPoject')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('error', err));


//from signupstudent
app.post('/SignUp', async (req, res) => {
  const { userType, name, lastname, password, ID, IDparent, childrenIDs, subject } = req.body;
  let newUser;
  
  try {
    if (userType === 'Student') {
      newUser = new Student({ name, lastname, password, ID, IDparent });
    } 
    else {
      throw new Error('Invalid user type');
    }

    const savedUser = await newUser.save();
    res.json({ success: true, user: savedUser });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});


// LoginPageStudent.js
app.post('/LoginPageStudent', async (req, res) => {
  const { ID, password, userType } = req.body;
  let UserModel;

  try {
    // בחירת מודל המשתמש לפי סוג המשתמש
  
    if(userType === 'Student')
      UserModel = Student;
   

    // חיפוש המשתמש לפי תעודת הזהות
    const user = await UserModel.findOne({ ID });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // השוואת הסיסמאות
    if (password !== user.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // התחברות הצליחה
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




//from SignUpParent.js
app.post('/SignUpParent', async (req, res) => {
  const { userType, name, lastname, password, ID, IDparent, childrenIDs, subject } = req.body;
  let newUser;
  
  try {
    if (userType === 'Parent') {
      newUser = new Parent({ name, lastname, password, ID});
    }else {
      throw new Error('Invalid user type');
    }

    const savedUser = await newUser.save();
    res.json({ success: true, user: savedUser });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

//from LoginPageParent.js
app.post('/LoginPageParent', async (req, res) => {
  const { ID, password, userType } = req.body;
  let UserModel;

  try {
    // בחירת מודל המשתמש לפי סוג המשתמש
  
    if(userType === 'Parent')
      UserModel = Parent;
   

    // חיפוש המשתמש לפי תעודת הזהות
    const user = await UserModel.findOne({ ID });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // השוואת הסיסמאות
    if (password !== user.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // התחברות הצליחה
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//from SignUpTeacher.js
app.post('/SignUpTeacher', async (req, res) => {
  const { userType, name, lastname, password, ID, IDparent, childrenIDs, subject } = req.body;
  let newUser;
  
  try {
    if (userType === 'Teacher') {
      newUser = new Teacher({ name, lastname, password, ID});
    }else {
      throw new Error('Invalid user type');
    }

    const savedUser = await newUser.save();
    res.json({ success: true, user: savedUser });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

//from LoginPageTeacher.js
app.post('/LoginPageTeacher', async (req, res) => {
  const { ID, password, userType } = req.body;
  let UserModel;

  try {
    // בחירת מודל המשתמש לפי סוג המשתמש
  
    if(userType === 'Teacher')
      UserModel = Teacher;
   

    // חיפוש המשתמש לפי תעודת הזהות
    const user = await UserModel.findOne({ ID });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // השוואת הסיסמאות
    if (password !== user.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // התחברות הצליחה
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



//האזנה לשרת
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
>>>>>>> 692547d (Login and navigate to user Dashboard)
