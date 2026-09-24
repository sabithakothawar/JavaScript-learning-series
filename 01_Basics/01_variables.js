const accountId = "08462"
let accountEmail = "Sabith@gmail.com"
var accountPassword = "12345"
accountCity ="Jiapur"

console.log(accountId);
console.log(accountPassword);
console.log(accountEmail);
console.table([accountId, accountEmail, accountCity,accountPassword]);

/*Prefer not to use var because of issue in the block scope and function scope */