/*------------------- Scope------------*/

let name = "Yasir"; // global scope    -Global variables can be used anywhere in the code.

function greet() {
  console.log(name); // accessible here
}

greet(); // Yasir
 

function greet() {
  let message = "Hello"; // local scope  -Local variables are only accessible inside that function/block.
  console.log(message);
}

greet(); // Hello
console.log(message); // ❌ Error

/*-------------Example-------------*/
if (true) {
  let age = 20;
  const city = "Lahore";
}

console.log(age);  // ❌ Error
console.log(city); // ❌ Error



if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // ✅ 10 (var ignores block)
console.log(y); // ❌ Error (let is block scoped)



 //Simple Way to Remember
// Global = available everywhere 🌍
// Local = only inside function 🔒
// Block = only inside {} 📦