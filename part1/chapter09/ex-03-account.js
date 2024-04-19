"use strict";

class Account{
  constructor(name, balance = 0){
    this.name = name;
    this.balance = balance;
  }
  credit(amount){
    this.balance += amount;
  }
  describe(){
    console.log(`Owner: ${this.name}, Balance: ${this.balance}`);
  }
}

const newAccount = new Account("John", 1000);
console.log(newAccount.describe());
newAccount.credit(-100)
console.log(newAccount.describe());
