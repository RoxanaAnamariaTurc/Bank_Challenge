const Bank = require("../src/bank")
const Transaction = require("../src/transaction");
const Statement = require("../src/statement");

let bank = new Bank();
bank.deposit(1000, '10-01-2012')
bank.deposit(2000, '13-01-2012')
bank.withdraw(500, '14-01-2012')
console.log(bank.statements);
