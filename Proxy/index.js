const BankProxy = require('./BankProxy');
const bankProxy = new BankProxy();
 
bankProxy.deposit(4000);
bankProxy.withdraw(500);
bankProxy.deposit(300);
bankProxy.total();