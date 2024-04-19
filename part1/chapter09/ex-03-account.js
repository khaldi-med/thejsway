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
    return (`Owner: ${this.name}, Balance: ${this.balance}`);
  }
}

const newAccount = new Account("John", 1000);
console.log(newAccount.describe());

// use credit method
newAccount.credit(-100);
console.log(newAccount.describe())
