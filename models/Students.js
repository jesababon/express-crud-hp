const db = require('../db/connection'); //are we linking our functions to db connection?

const Students = {};


Students.all = function () {
  return db.any('SELECT * FROM students');
};

Students.all().then(students => {
  // console.log(students);
  return students;
});


// console.log('Students.js connected'); //locked and loaded
 
module.exports = Students; //export this stuff so we can use it in our server file.