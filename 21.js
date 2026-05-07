// Immediately Invoked Function Expressions IIFE 

// simple function
function user(){
    console.log("Connection done ");
    

}
user();

// IIFE Function with simple way

(function user(){
    console.log("Connection done ");

})();  // we use () at the end of function to invoke it immediately after defining it. It is called Immediately Invoked Function Expression (IIFE) because it is a function that is defined and invoked immediately. It is a common pattern in JavaScript to create a new scope and avoid polluting the global scope. It is also used to create private variables and functions that are not accessible from outside the function.


// IIFE Function with Arrow function

((name) => {
    console.log(`Connection done ${name}`);    
})("Yasir")  // we can also use arrow function to create IIFE, it will give us the same output as before. It is a shorter syntax for writing IIFE functions in JavaScript.