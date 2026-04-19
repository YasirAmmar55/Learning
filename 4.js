// Number
let age = 23
console.log(typeof age);

//string
const name = "yasir"
console.log(typeof name);

// boolean
let isboy = true 
console.log(typeof (isboy));

// null
let money = null 
console.log(typeof money);

 // undefined
let tension = undefined
console.log(typeof tension);

// symbol
let id = Symbol("id")
console.log(typeof id); 
  
// Number to String
let valueInNumber = String(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// String to Number
let valueInString = Number(name)    
console.log(typeof valueInString);
console.log(valueInString);


// object
let valueInObject = Number(null)    
console.log(typeof valueInObject);
console.log(valueInObject); 
 
//boolen to String
let valueInNumber2 = Number(isboy)    
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

console.table({age, name, isboy, money, tension, id, valueInNumber, valueInString, valueInObject, valueInNumber2})


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN