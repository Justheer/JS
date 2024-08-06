const accountId = 1445533
let accountEmail = "heer@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2   // not allowed to change

accountEmail = "h@hgamol.com"
accountPassword = "111111"
accountCity = "Texas"



console.log(accountId);

/* 
Prefer not to use var keyword, because of issue in block scope and functional scope
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

