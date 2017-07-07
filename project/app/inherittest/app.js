var Person = require('./Person');
var Student = require('./Student');
var Teacher = require('./Teacher');
var Coder = require('./Coder');
var Overload = require('./redefineMethod');
var DStudent = require('./dynicStudent');
var SStudent = require('./staticStudent');

var PersonObj = new Person();
var StudentObj = new Student();
var TeacherObj = new Teacher();
var CoderObj = new Coder();
var OverloadObj = new Overload();
var DStudentObj = new DStudent();

console.log('<----for base of Person--->');
PersonObj.sleep();
PersonObj.eat();

console.log('<----for base of Student---->');
StudentObj.study();

console.log('<------for base of Teacher---->');
TeacherObj.teach();

console.log('<-----for base of Coder---->');
CoderObj.coding();

console.log('<-----for base of Overload');
OverloadObj.eat();

console.log('<----for base of dynamic Student-->');
DStudentObj.study();

console.log('<-------for base of static student---->');
SStudent.sleep();
SStudent.eat();
SStudent.study();
