import Person from "./person";
import Student from "./student";
import Teacher from "./teacher";

// TODO - test classes
var testPerson = new Person('Joe Test');
var testStudent = new Student({
    name: 'Jane Clever',
    marks: []
});
var testTeacher = new Teacher({
    name: 'Bob Sinclair',
    students: [testStudent,]
});



export {Person, Student, Teacher}