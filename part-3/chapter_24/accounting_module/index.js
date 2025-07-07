const Account = require("./accounting.js");

const myAccount = new Account("Jeff");

myAccount.credit(250);
console.log(myAccount.describe());
