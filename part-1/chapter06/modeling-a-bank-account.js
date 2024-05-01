const account = {
  name: "Alex",
  balance(amount){
   return amount; 
  },
  credit:0,

  describe() {
    return `Owner: ${this.name}, blance: ${this.balance(this.credit)}`;
  },
};

console.log(account.describe())
account.credit += 250
account.credit -= 80

console.log(account.describe())
