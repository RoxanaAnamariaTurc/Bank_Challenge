class Transaction
{
    #amount;
    #date;
    #balance;

    constructor(amount, date, balance)
    {
        this.#amount = amount;
        this.#date = date;
        this.#balance = balance;
    }
    get amount()
    {
        return this.#amount;
    }
    get date()
    {
        return this.#date;
    }
    get balance()
    {
        return this.#balance;
    }
    isCredit()
    {

        return this.#amount > 0;
    }
}

module.exports = Transaction;