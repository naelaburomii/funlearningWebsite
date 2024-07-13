const mongoose = require('mongoose');
const { Schema } = mongoose;

// סכימת הבסיס לכל סוגי היוזרים
const options = { discriminatorKey: 'userType', collection: 'users' };

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ID: {
    type: String,
    required: true,
    unique: true  // יחודי
  }
}, options);



// סכימה עבור תלמיד
const studentSchema = new Schema({
  IDparent: {
    type: String,
    required: true
  }
});

// סכימה עבור הורה
const parentSchema = new Schema({});

// סכימה עבור מורה
const teacherSchema = new Schema({});



const User = mongoose.model('User', userSchema); // הטבלה הכללית 
// סוגי המשתמשים השונים
const Student = User.discriminator('Student', studentSchema);
const Parent = User.discriminator('Parent', userSchema);
const Teacher = User.discriminator('Teacher', teacherSchema);

module.exports = { User, Student, Parent, Teacher};
