const number = 100;    // Auto considered it is a number
console.log(number)  

const age = new Number (25); // we declare it is a number 
console.log(age);

console.log(age.toString());  // Change into string now we use method of string in number like ->

console.log(age.toString().length)  // now we check length but in number we have no direct method to check length
console.log(age.toFixed(1))  // after .  how much number 


const new1 = 123.878;
console.log(new1.toPrecision(4)); // precisized the number ->like we give 4 its means it return 4 number  around out 


const new2 = 123453434;
console.log(new2.toLocaleString('en-IN')); // sperate by , to easily under how much number is 




