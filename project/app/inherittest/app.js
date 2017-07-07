var Person = require('./Person');
var Student = require('./Student');
var Teacher = require('./Teacher');
var Coder = require('./Coder');

var PersonObj = new Person();
var StudentObj = new Student();
var TeacherObj = new Teacher();
var CoderObj = new Coder();
console.log('<----for base of Person--->');
PersonObj.sleep();
PersonObj.eat();

console.log('<----for base of Student---->');
StudentObj.study();

console.log('<------for base of Teacher---->');
TeacherObj.teach();

console.log('<-----for base of Coder---->');
CoderObj.coding();
