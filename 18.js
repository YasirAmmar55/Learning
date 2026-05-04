/*------------------------Function---------------*/

function myName(){
console.log("y");
console.log("a");
console.log("s");
console.log("i");
console.log("r");

}

myName  // function reference only 
myName() // give function output 

/*--------------Example--------------*/
function sum (x,y){     // x,y are the  parameters of function sum  and when we call and give value it called arguments
    console.log(x+y);
    
}
sum()                 //dose't show any thing because values/argument not given 
sum(2,3)             //output:5
sum(2,"3")          //output:23
sum(2,"a")         //output:2a
sum(2,null)       //output:2


/*-------return value------*/
function add(r1,r2){
    let result = r1 + r2
    return result
    console.log("executed")      // by default in function after return nothing works 
}
const result = add(3,5)
console.log("Result:" , result);



function usrmsg(msg){
    return `${msg}  is logedin`

}
console.log(usrmsg("hello"));    // output:  hello is logedin
console.log(usrmsg(""));         // output:        is logedin
console.log(usrmsg());    // output:  undefined is logedin


function usrmsg1(msg){
    if(msg===undefined){
        console.log("please enter msg")
        return
    }
    return `${msg}  is logedin`
}
console.log(usrmsg1());
