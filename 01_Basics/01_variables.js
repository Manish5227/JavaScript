const accountId = 199
let accountName = "Manish"
var accountEmail = "manish@google.com"
accountCity = "Patna"
let accountState;

accountName = "Krishna"
accountEmail = "krishna@google.com"
accountCity = "Delhi"

// accountId = 11

/*
   prefer NOT to use var
   beacuse of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountName,accountCity,accountState]);
