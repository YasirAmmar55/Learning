// /*------------------- Scope------------*/

// let name = "Yasir"; // global scope    -Global variables can be used anywhere in the code.

// function greet() {
//   console.log(name); // accessible here
// }

// greet(); // Yasir
 

// function greet() {
//   let message = "Hello"; // local scope  -Local variables are only accessible inside that function/block.
//   console.log(message);
// }

// greet(); // Hello
// console.log(message); // ❌ Error

// /*-------------Example-------------*/
// if (true) {
//   let age = 20;
//   const city = "Lahore";
// }

// console.log(age);  // ❌ Error
// console.log(city); // ❌ Error



// if (true) {
//   var x = 10;
//   let y = 20;
// }

// console.log(x); // ✅ 10 (var ignores block)
// console.log(y); // ❌ Error (let is block scoped)



//  //Simple Way to Remember
// Global = available everywhere 🌍
// Local = only inside function 🔒
// Block = only inside {} 📦

/*---------------------Scope level-------------------*/

if(true){
  const name = "yasir"  //
  if(name==="yasir") {
    const name1 = "ammar"
    console.log(name1 + " " + name); // ammar yasir   we can access name1 and name because they are in the same block scope. So it will give us the output "ammar yasir".
  }
    
    console.log(name1); // ammar  not defined because it is block scope and we are trying to access it outside the block. So it will give us an error.
  
}
//console.log(name1); // here name1 is not defined because it is block scope and we are trying to access it outside the block. So it will give us an error.



/*--------------------------HOSITING-------------------------*/

// the fuction declaration is hoisted to the top of the scope, so we can call the function before its declaration. So in this case, myName("ammar") will work because the function declaration is hoisted to the top of the scope. So it will give us the output "ammar".
myName("ammar"); // give function output
function  myName(name){
    console.log(name)
}

name1("ammar"); // give error because function expression is not hoisted to the top of the scope. So in this case, name1("ammar") will not work because the function expression is not hoisted to the top of the scope. So it will give us an error.
const myFunction = function(name){  // function expression
    console.log(name)
} 

