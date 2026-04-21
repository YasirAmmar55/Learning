/* ----------------Heap and stack------------------ */

// Heap and stack are two different memory areas used by programming languages to manage data.  

// Stack(Primitive data types use it) is a region of memory that stores temporary variables created by each function. It operates in a last-in, first-out (LIFO) manner, meaning that the last variable added to the stack is the first one to be removed. The stack is used for storing primitive data types and function calls, and it has a limited size. When the stack is full, it can lead to a stack overflow error.

// Heap(Non-primitive data types use it), on the other hand, is a region of memory that is used for dynamic memory allocation. It is a larger and more flexible area of memory that can grow and shrink as needed. The heap is used for storing objects and data structures that require more memory than what the stack can provide. Unlike the stack, the heap does not have a fixed size, but it can lead to fragmentation and performance issues if not managed properly.


let num1 = 10; // stored in stack
let obj1 = {name: "John", age: 30}; // stored in heap

let myname = "Yasir"; // stored in stack
let anothername = "Ammar"; // stored in stack       

myname = anothername; 

console.log(myname);
console.log(anothername);


let usr1 = {name: "Yasir", age: 25}; // stored in heap
let usr2 = {name: "Ammar", age: 30}; // stored in heap

usr1 = usr2; // now both usr1 and usr2 point to the same object in the heap
console.log(usr1);
console.log(usr2);
