"use strict"; // treat all js code as newer version 
alert(3+3) // 6, the result of the expression is shown in an alert window
alert(3-3) // 0, the result of the expression is shown in an alert window
alert(3*3) // 9, the result of the expression is shown in an alert window
alert(3/3) // 1, the result of the expression is shown in an alert window   

console.log(3
    +3); // code readability should be high and should be in one line but it is not recommended to write code in multiple lines as   it can cause issues in some cases
 console.log(3-3); // easily readable and understandable code
console.log(3*3);
console.log(3/3);

 // Number =>  2**53 - 1 is a data type that represents numeric values, it can be used to perform mathematical operations and can be represented in different formats such as integers, floating-point numbers, and exponential notation. 
 // string => "Hello World" is a data type that represents a sequence of characters, it can be used to store and manipulate text, and can be defined using single quotes, double quotes, or backticks.
 // boolean => true is a data type that represents a logical value, it can be either true or false, and is often used in conditional statements and loops to control the flow of the program.
 //null => stands for "no value" or "empty value", it is a data type that represents the absence of any object value, and is often used to indicate that a variable has no value or that an object property does not exist.
 //undefined => is a data type that represents the absence of a value or the uninitialized state of a variable, it is often used to indicate that a variable has not been assigned a value or that a function does not return a value.
 // Symbol => is a data type that represents a unique identifier, it is often used to create unique property keys for objects, and can be created using the Symbol() function.



 //object => is a data type that represents a collection of key-value pairs, it can be used to store and manipulate complex data structures, and can be defined using curly braces {}. Objects can have properties and methods, and can be created using object literals, constructor functions, or classes.
 console.log(typeof 3); // Output: number 
 console.log(typeof null); // Output: object (this is a known issue in JavaScript, null is actually a primitive value but it is treated as an object)
 


 // when you run this in node.js it show error alert is not defined because alert is a method that is only available in web browsers, it is used to display a message to the user in a pop-up window. In node.js, you can use console.log() to display messages in the console instead of using alert().
 