const Bank = require("./Bank");

class BankProxy {
  constructor() {
    this.bank = new Bank();
  }

  deposit(amount) {
    this.bank.deposit(amount);
    console.log(`deposit ${amount}... total cash: ${this.bank.total()}`);
  }

  withdraw(amount) {
    if (this.bank.withdraw(amount)) {
      console.log(`withdraw ${amount}... total cash: ${this.bank.total()}`);
    } else {
      console.log(`failed to withdraw!`);
    }
  }

  total() {
    return console.log(`total cash: ${this.bank.total()}`);
  }
}

module.exports = BankProxy;
