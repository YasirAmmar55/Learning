
/*-----------------------primitive  --------------------*/


//  Call By Value Primitive data types in JavaScript include: number, string, boolean, undefined, null, and symbol ,bigint.

const num1 = 10; // number
const str1 = "Hello"; // string
const bool1 = true; // boolean
const undef1 = undefined; // undefined means a variable has been declared but has not been assigned a value yet, it is a primitive data type that represents the absence of a value or the uninitialized state of a variable.
const null1 = null; // null its mean  "no value" or "empty value" 
const sym1 = Symbol("unique"); // symbol    
const BigInt1 = 1234567890123456789012345678901234567890n; // BigInt 

console.table({num1, str1, bool1, undef1, null1, sym1}); // Output: a table with the values of the variables

/*----------------------- Non-primitive  --------------------*/


// Reference Non-primitive data types in JavaScript include: object, array, and function.

const obj1 = {name: "John", age: 30}; // object
const arr1 = [1, 2, 3, 4, 5]; // array
const function1 = function() { // function
    console.log("Hello World");
};
  
console.table({obj1, arr1, function1}); // Output: a table with the values of the variables


console.table({num1: typeof num1, str1: typeof str1, bool1: typeof bool1, undef1: typeof undef1, null1: typeof null1, sym1: typeof sym1, BigInt1: typeof BigInt1}); // Output: a table with the data types of the variables
console.table({obj1: typeof obj1, arr1: typeof arr1, function1: typeof function1}); // Output: a table with the data types of the variables    
