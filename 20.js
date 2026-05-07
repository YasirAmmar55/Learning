const user = {
    name : "yasir",
    id : 123,
    welcome :function (){

    console.log(`${this.name}, Thanks for creating me`);    // this current context reffer to access any variable in function we use it
    console.log(this);
    
}
};
user.welcome()
user.name = "ammar"
console.log(this); // at this place it dose't reffern any thing 


function info () {
    let name = "yasir"
    console.log(this.name);    // we can't use this in this function because it is not an object method, so it will give us undefined.
    
}
console.log(info());   // undefined



const info =function () {
    let name = "yasir"
    console.log(this.name);    // we can't use this in this function because it is not an object method, so it will give us undefined.
    
}
console.log(info());   // undefined



const info = () => {
    let name = "yasir"
    console.log(this.name);    // we can't use this in this function because it is not an object method, so it will give us undefined.
    
}
console.log(info());   // undefined



/*-----------------------ARROW ------------------*/


const addtwoNum =  (num1,num2)=>{
    return num1 + num2   // explicit return 
}

console.log(addtwoNum(2,3));


//implicit return  
const addtwoNum =  (num1,num2)=> num1 + num2  //  when we have only one line of code in function we can write it like this without return and curly braces {} it will give us the same output as before. It is called implicit return because we don't need to write return keyword. It is a shorthand syntax for writing functions in JavaScript.
const addtwoNum =  (num1,num2)=> (num1 + num2) // we use () at place of  {}
console.log(addtwoNum(2,3));



const user = {
  name: "Yasir",
  greet: function() {
    console.log(this.name);
  }
}

user.greet();


const user = {
  name: "Yasir",
  greet: () => {
    console.log(this.name);
  }
}

user.greet(); // undefined

//We use arrow functions because they make code:

// Shorter
// Cleaner
// Easier to read

//Important Concept

// Arrow function does NOT create its own this.

// It borrows this from outside scope.

// Normal function creates its own this.