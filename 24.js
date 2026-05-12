/*--------------------Loop--------------------*/

// for loop

for(i =0 ; i <=10 ; i++){

    console.log(i)
}


// for loop with statament
for(i =0 ; i <=10 ; i++){

    if(i%2==0){
        console.log(i)
    }   
}

// for loop with array
const arr = [1,2,3,4,5,6,7,8,9,10]      
for(i =0 ; i < arr.length ; i++){

    if(arr[i]%2==0){
        console.log(arr[i])
    }   

}


// for with for in loop
// inner and outer loop

for(i =0 ; i < arr.length ; i++){       
    for(j =0 ; j < arr.length ; j++){
        console.log(arr[i],arr[j])
    }   
}

// table of 2
for(i =1 ; i <=10 ; i++){
    // it execte one time then inner loop execute 10 times then outer loop execute again and inner loop execute 10 times and so on
    console.log(`2 x ${i} = ${2*i}`) // we can also write like this
    console.log(i + ' x ' + j + ' = ' + i*j); // but using template literals is more readable and easier to understand
    
}       

/* -------------------Break and Continue------------------*/

// break statement is used to exit from the loop when a certain condition is met. It will stop the loop and move to the next line of code after the loop.   
for(i =0 ; i <=10 ; i++){

    if(i==5){
        break
    }       
    console.log(i)
}
// continue statement is used to skip the current iteration of the loop when a certain condition is met. It will skip the current iteration and move to the next iteration of the loop.
for(i =0 ; i <=10 ; i++){       
    if(i==5){
        continue
    }   
    console.log(i)
}   



/*--------------While loop------------------*/

let i = 0       
while(i <= 10){
    console.log(i)
    i++
}   
 let i = [1,2,3,4,5,6,7,8,9,10]
    let j = 0
while(j < i.length){
    if(i[j]%2==0){
        console.log(i[j])
    }
    j++
}   
/*--------------Do while loop------------------*/

let i = 0       

do{
    console.log(i)
    i++
} while(i <= 10)

