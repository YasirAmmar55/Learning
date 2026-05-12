/*---------------Control flow ---------------*/

/* If statement */
const age = 18

if (age >= 18) {
  console.log("You can vote")
}


/* If...else statement */
const temp = 30

if (temp > 25) {
  console.log("Hot day")
} else {
  console.log("Cool day")
}


/* If...else statement */
const marks = 70

if (marks >= 90) {
  console.log("A")
} else if (marks >= 70) {
  console.log("B")
} else {
  console.log("Fail")
}

// Comparison Operators
// > greater than
// < less than
// >=
// <=
// == only value check
// === value + datatype check


console.log(2 == "2")   // true
console.log(2 === "2")  // false


// Logical Operators
// && AND
// || OR
// ! NOT

const loggedIn = true
const paidUser = true

if (loggedIn && paidUser) {
  console.log("Access granted")
} else if (loggedIn || paidUser) {
  console.log("Partial access granted")
}



/*-------------switch Statement-------------*/

// switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if...else statements.
const day = 2

switch(day) {
  case 1:
    console.log("Monday")
    break

  case 2:
    console.log("Tuesday")
    break

  default:
    console.log("Invalid")
}

/*-------------Ternary Operator-------------*/

// The ternary operator is a shorthand way of writing an if...else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

const isMember = true
const discount = isMember ? 0.1 : 0
console.log(discount) // Output: 0.1

//Example
const age = 20

age >= 18 ? console.log("Adult") : console.log("Minor")

  /*-----------------Truthy & Falsy Values-----------------*/

// Falsy values:

// false
// BigInt(0n)
// 0
// ""
// null
// undefined
// NaN

// Truthy values: All values that are not falsy are truthy. This includes:

// true 
// Any non-zero number
// Any non-empty string
// Any object
// Any array    

if (0) {
  console.log("This will not be executed")
}
if ("Hello") {
  console.log("This will be executed")
}       

const emptyobject = {}
if (emptyobject) {
  console.log("This will be executed")
}       

/*---------------------Nulish Coalescing Operator-----------------*/

// The nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.

const name = null
const defaultName = "Guest"
const displayName = name ?? defaultName
console.log(displayName) // Output: "Guest"

console.log(null ?? "Default") // Output: "Default"
console.log(undefined ?? "Default") // Output: "Default"
console.log(false ?? "Default") // Output: false
console.log(0 ?? "Default") // Output: 0