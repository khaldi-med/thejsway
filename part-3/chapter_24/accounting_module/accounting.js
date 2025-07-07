"use strict";

module.exports = class Account {
  constructor(name) {
    this.name = name;
  }

  credit(amount) {
    return (this.amount = amount);
  }

  describe() {
    return `owner: ${this.name}, balance: ${this.amount}`;
  }
};
