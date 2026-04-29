//object literal
const mySym = Symbol("key1")
const myInfo = {
	name : "Yasir",
	"lastname" : "ammar",
	age : 23,
	location : "Pakistain",
    isLogedIn : false ,
    mySym : "key1",  // its works as string but we wants symbol
    [mySym] : "key1" , // output Symbol

}


// There are two methodes to access the object 

console.log(myInfo.name)  // with .   
// problem is that when yo access "string " like "lastname" you can't access it so you use 2 methode  . most of the time we use it


console.log(myInfo["lastname"]);  // by this method you access it 
console.log(myInfo["mySym"]);  

// Changing values

myInfo.location = "Lahore" 
console.log(myInfo);

console.table(myInfo)
// You can freez anything so anyone can't change it 

//Object.freeze(myInfo);


myInfo.location = "Karachi"  // no change because we freeze the obj 
console.log(myInfo); // does't  show any error 


  
myInfo.greeting = function(){
    console.log("hello Everyone")
}

myInfo.greeting1 = function(){
    console.log(`hello Everyone,${this.name}`)  // access 
}

console.log(myInfo.greeting); // 👉 This does NOT run the function 👉 It just gives you the function itself (reference)
console.log(myInfo.greeting1);

console.log(myInfo.greeting()); // 👉 This CALLS / RUNS the functio 👉 It returns whatever is inside the function
console.log(myInfo.greeting1()); 
