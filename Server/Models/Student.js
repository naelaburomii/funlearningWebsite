/*const mongoose = require('mongoose');

const newStudent = new mongoose.Schema({
  name:String,
  lastname:String,
  password:String
});

module.exports = mongoose.model("Student",newStudent);

module.exports = Student;
*/

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  password: {
    type: String,
  },
  classLevel: {
    type: String,
  },
  city: {
    type: String,
  },
  age: {
    type: Number,
  },
  teacherName: {
    type: String,
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
