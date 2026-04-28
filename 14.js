const my_friends =["kamran","hamza"]
const my_bro = ["mesam","kumail"]


my_friends.push(my_bro)  // push full array as a element [1,2,3,[4,6,6]] on existing array
console.log(my_friends);  

/*-----------------Concatination-------------*/
const relation = my_friends.concat(my_bro) // output same but use new arrary [1,2,3,[4,5],4,5]
console.log(relation);

/*-----------------Spread Operatores-------------*/
const my_relation = [...my_friends, ...my_bro]  // same as conat but is more easy and useful in modern way
console.log(my_relation);


const myRelation = ["yasir",'mesam',["kumail","hamza"],"abdullah",["ruman"]]
const newMyRelation = myRelation.flat(Infinity)  //  nested array -> in one array AT PLACE of infinity you give depth means how much array 
console.log(newMyRelation);


/*-----------------convert string into array-------------*/
const myName = ("yasir")  // it is a string 
console.log(Array.isArray(myName))  // ? is a array or not [trur ,false] at this stage it is false
const check =(Array.from(myName))  // convert 
console.log(check);
console.log(Array.isArray(check))  // it return true  


let score1 = 133
let score2 = 133
let score3 = 133

console.log(Array.of(score1,score2,score3));

