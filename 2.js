const accountId = 1234567890 // accountId is a constant and cannot be changed
let accountEmail = "yasir@gmail.com" // accountEmail can be changed but accountId cannot be changed
var accountPassword = "12345678" // Not Used due to scope issue
accountCity = "Karachi" // it can be used without declaration but it is not recommended


// accountId=2
 console.log(accountId); // Output: TypeError: Assignment to constant variable.
 
console.log(accountEmail); // Output:
console.table([ accountId, accountEmail, accountCity ])
