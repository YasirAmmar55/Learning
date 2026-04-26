const arr = [0,1,12,2,45,"yasir",true,-8] // any type of  variable in a arry 

console.log(arr[4]);  // we can only access  a element by index

const myHeros = ["IK","QA","BA","NS"] // array of strings
console.log(myHeros[3]); 


// Array Methodes
 const arr1 = [1,2,3,4,5]
arr1.push("ammar") // push method add a element at the end of the array
arr1.pop("ammar") // pop method remove a element at the end of the array
arr1.unshift("ammar") // add a element at the beginning 
arr1.shift() //remove a element at the beginning of the array
//console.log(arr1);

 console.log(arr1.includes(2));


 const arr2 = arr1.join(",") // join method convert array into string and add a separator between the elements
 console.log(arr2); // output: 1,2,3,4,5


 /*----------------------- Slice and Splice -------------------- */

// Difference between slice and splice method in JavaScript is that slice method returns a new array with the selected elements, while splice method modifies the original array by removing or replacing existing elements and/or adding new elements in place. The slice method does not change the original array, while the splice method does change the original array.
const arr3 = [1,2,3,4,5]
const newArr = arr3.slice(1,4) // slice method return a new array with the selected elements, it does not modify the original array. The first parameter is the starting index (inclusive) and the second parameter is the ending index (exclusive). So in this case, arr3.slice(1,4) will return a new array [2, 3, 4] because it includes the elements at index 1, 2, and 3 but not the element at index 4.
console.log(newArr); // output: [2, 3, 4]
console.log(arr3); // output: [1, 2, 3, 4, 5] (original array is not modified)  

const arr4 = [1,2,3,4,5]
arr4.splice(1,2) // splice method modifies the original array by removing or replacing existing elements and/or adding new elements in place. The first parameter is the starting index, the second parameter is the number of elements to remove, and the optional third parameter(s) are the new element(s) to add. So in this case, arr4.splice(1,2) will remove 2 elements starting from index 1 (which are 2 and 3), resulting in a modified array [1, 4, 5].
console.log(arr4); // output: [1, 4, 5] (original array is modified)        

