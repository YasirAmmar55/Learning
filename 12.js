let myDate = new Date(2026,0,26)  // also declare (2026-01-26)  if you use , month start with "0" and - is start with "01"
// (yy-mm-dd) ,(mm-dd-yy) , (dd-mm-yy)  syntax for declartion
console.log(myDate.toDateString()); // day month date year
console.log(myDate.toLocaleDateString()); // date/month/year
console.log(myDate.toLocaleTimeString()); //  time 12:23:33  am/pm


let myTimeStamp = Date.now()
console.log(myTimeStamp); // show time in miliseconds 1121221434325
console.log(myDate.getTime()); // show time in miliseconds 1121221434325
console.log(Date.now()/1000); // show time in miliseconds small as compare to uper  1121221434.33343 but in decimal 
console.log(Math.floor(Date.now()/1000)); // Use math fuction to remove decimals


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // show day in number 0-6 0 for sunday and 6 for saturday
console.log(newDate.getDate()); // show date in number 1-31
console.log(newDate.getMonth()); // show month in number 0-11 0 for january and 11 for december 
console.log(newDate.getHours()); //show hours in 24 hours format
console.log(newDate.getHours()%12 || 12); //show hours in 12 hours format
console.log(newDate.getMinutes()); // show minutes
console.log(newDate.getSeconds());// show seconds
console.log(newDate.getFullYear()); // show year in 4 digit 2026 because it show year from 1900 to 2026 so 2026-1900 = 126 but getFullYear() show year in 4 digit
console.log(newDate.getYear()); // show year in 2 digit 126 why because it show year from 1900 to 2026 so 2026-1900 = 126

console.table({day: newDate.getDay(), date: newDate.getDate(), month: newDate.getMonth(), hours24 : newDate.getHours(), hours12: newDate.getHours()%12 || 12, minutes: newDate.getMinutes(), seconds: newDate.getSeconds(), year: newDate.getFullYear()}); // show all date and time in table format


console.log(`The Day is ${newDate.getDay()} and the month is ${newDate.getMonth()}`); //show day and month in string format using template literals

let newDate1 = new Date()
console.log(newDate1.toLocaleString('en-US', { weekday: 'long', month: 'long' })); // show day and month in string format using toLocaleString() method with options object