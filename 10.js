const number = 100;    // Auto considered it is a number
console.log(number)  

const age = new Number (25); // we declare it is a number 
console.log(age);

console.log(age.toString());  // Change into string now we use method of string in number like ->

console.log(age.toString().length)  // now we check length but in number we have no direct method to check length
console.log(age.toFixed(1))  // after .  how much number 


const new1 = 123.878;
console.log(new1.toPrecision(4)); // precisized the number ->like we give 4 its means it return 4 number  around out 


const new2 = 123453434;
console.log(new2.toLocaleString()); // sperate by  equal number  , to easily under how much number is 
console.log(new2.toLocaleString('en-IN'))  // accourding to laern like -> 1 lack 25 hundred etc 1,25,234


/*---------------------Other Methods--------------------*/

/*---- Basic Methods-------*/
// Basic number methods can be used on any number:

// toString()
// toExponential()
// toFixed()
// toPrecision()
// valueOf()

/*---- Static Methods------*/
// Static methods can only be used on Number:

// Number.isFinite()
// Number.isInteger()
// Number.isNan()
// Number.isSafeInteger()
// Number.parseInt()
// Number.parseFloat()


// more form mdn or brwser console

