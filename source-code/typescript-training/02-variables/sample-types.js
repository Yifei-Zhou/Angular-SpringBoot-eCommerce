var found = true;
var grade = 88.6;
var firstName = "Anup";
var lastName = 'Kumar';
var data = 90.0;
data = true;
found = false;
grade = 93.0;
firstName = 'Jimmy';
lastName = 'Choo';
// let's break it!
/*
found = 0;
grade = "A";
firstName = false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template Strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
console.log(data);
