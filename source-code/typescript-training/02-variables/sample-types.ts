let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = 'Kumar';

let data: any = 90.0;

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
console.log(`Hi ${firstName} ${lastName}`);

console.log(data);