const name = "yasir";
const age = 25;

console.log(name+age);  // Old method
  
/*----------------------- Template Literals -------------------- */
console.log(`my name is ${name} and my age is ${age}`); 


const name1 = new String('yasir');  // another way to write a string 

console.log(name1[0]); // 0  index of string show 'y'
console.log(name1.__proto__); // show all the methods of string data type

/// String methods
console.log(name1.length); // show the length of the string
console.log(name1.toLowerCase()); // show the string in lowercase
console.log(name1.toUpperCase()); // show the string in uppercase

console.log(name1.charAt(2));  // check char by index 
console.log(name1.indexOf('s')); // check index by char


const str1 = name1.substring(0,4)   // 0-4 index of name1  output: yasi
console.log(str1);

const str2 = name1.slice(-3,4) // take values in - 
console.log(str2);


const str3 = "       yasir     "        
console.log(str3);   //  output:       yasir  
console.log(str3.trim());  // output:yasir


const address = "lahorepunjabpakistan"
console.log(address.replace('lahorepunjabpakistan','Pakistan'));  // Replace function

console.log(address.includes('lahore'));
