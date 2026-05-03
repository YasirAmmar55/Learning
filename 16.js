/*---------------Object Singalton----------------*/
//const user = new object() // singalton
const user = {} // non-singalton


user.id = "123bs"
user.name = "Yasir"
user.location = "Pak"
user.islogedIN = false

console.log(user);
console.log(Object.keys(user)); // return keys of array

/*--------nested object----------*/
const usr1 = {
    email : "some@gmail.com",
    username:{
        fullname:{
            firstname : "yasir",
            lastname : "ammar",
        }
    }
}
console.log(usr1.username.fullname.lastname); // access 

/*------------------concatination of object---------------*/
const obj1 = {1: "a" ,2: "b"}
const obj2 = {3: "c" ,4: "d"}
const obj3 = {obj1,obj2} // combined all data  
const obj4 = Object.assign(obj1,obj2) //  without {} it store  obj2 in obj1(changed)  and return obj2 same 
const obj5 = Object.assign({} ,obj1,obj2) // combined only values 
const obj6 = {...obj1, ...obj2}   // easy and modern way
console.log(obj3); 
console.log(obj4); 
console.log(obj5); 
console.log(obj6); 




const usr2 = [
    {
        id : 123 ,
        name : "yasir",
    },
    {
        id : 456 ,
        name : "ali",
    },
    {
        id : 789 ,
        name : "ammar",
    },
    {
        id : 562 ,
        name : "mesam",
    }
]
console.log(usr2);
console.log(Object.keys(usr2));
console.log(Object.values(usr2));
console.log(Object.entries(usr2));
console.log(usr2[1].hasOwnProperty('name')); // to check value 


/*--------------Object Destructure---------------*/

const fee = {
    name : "yasir",
    id : 123,
    location : "hafizabad",
}
 
const {location : Loc} = fee  // rename after you can access by loc 
console.log(Loc);

