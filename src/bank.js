const Transaction = require("../src/transaction");
const Statement = require("../src/statement")
class Bank
{
    #balance = 0;
    #transactions = [];
    #statement;

    constructor(statement = new Statement())
    {
        this.#statement = statement;
    }


    deposit(amount, date)
    {
        this.#balance += amount;
        this.#transactions.push(new Transaction(amount, date, this.#balance))
    }
    get balance()
    {
        return this.#balance;
    }
    withdraw(amount, date)
    {
        this.#balance -= amount;
        this.#transactions.push(new Transaction(-amount, date, this.#balance))
    }
    get transactions()
    {
        return this.#transactions;
    }
    get statements()
    {
        return this.#statement.print(this.#transactions);
    }
}

module.exports = Bank;