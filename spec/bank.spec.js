const Bank = require("../src/bank");
const Transaction = require("../src/transaction");
const Statement = require("../src/statement")
describe(`Tests for the bank challenge`, () =>
{
    it(`Test 1 - as a user I would like to be able to deposit money in my account`, () =>
    {
        //Arrange
        let bank = new Bank();
        let expected = 1000;
        //Act
        bank.deposit(1000, '10-01-2012');
        let actual = bank.balance;
        //Assert
        expect(actual).toBe(expected);
    })
    it(`Test 2 - as a user I would like to withdraw an amount from my account`, () =>
    {
        //Arrange
        let bank = new Bank();
        let expected = 500;
        //Act
        bank.deposit(1000, '10-01-2012');
        bank.withdraw(500, '13-01-2012');
        let actual = bank.balance;
        //Assert
        expect(actual).toBe(expected);

    })
    it(`Test 3 - as a user I would like to see the date of each transaction and the balance after each transaction`, () =>
    {
        //Arrange
        let bank = new Bank();
        let expected = [new Transaction(1000, '10-01-2012', 1000), new Transaction(-500, '13-01-2012', 500)];
        //Act
        bank.deposit(1000, '10-01-2012');
        bank.withdraw(500, '13-01-2012');
        let actual = bank.transactions;
        //Assert
        expect(actual.length).toBe(expected.length);
        for (let i = actual.length - 1; i >= 0; i--)
        {
            expect(actual[i].amount).toBe(expected[i].amount);
            expect(actual[i].date).toBe(expected[i].date);
            expect(actual[i].balance).toBe(expected[i].balance);
        }
    }
    )
    it(`Test 4 - as a user I would like to know whether a transaction is deposit or withdraw`, () =>
    {
        //Arrange
        let bank = new Bank();
        //Checking that if the amount is a positive number then we have a deposit, otherwise we have a withdrawal
        let expected = [true, true, false];
        //Act
        bank.deposit(1000, '10-01-2012');
        bank.deposit(2000, '14-01-2012');
        bank.withdraw(500, '13-01-2012');
        let actual = bank.transactions;

        //Assert
        for (let i = actual.length - 1; i >= 0; i--)
        {
            expect(actual[i].isCredit()).toBe(expected[i])
        }
    }
    )
    it(`Test 5 - as a user I would like to print my statements`, () =>
    {
        //Arrange
        let transactions = [
            new Transaction(1000, '10-01-2012', 1000), new Transaction(2000, '13-01-2012', 3000), new Transaction(-500, '14-01-2012', 2500)
        ];
        let statement = new Statement();
        let expected = "date||credit||debit||balance\n14-01-2012||0||500||2500\n13-01-2012||2000||0||3000\n10-01-2012||1000||0||1000"
        //Act
        let actual = statement.print(transactions);
        //Assert
        expect(actual).toBe(expected);
    })
    it(`Test 6 - as a user I would like the bank to give me my statements`, () =>
    {
        //Arrange
        let bank = new Bank();
        bank.deposit(1000, '10-01-2012');
        bank.deposit(2000, '13-01-2012');
        bank.withdraw(500, '14-01-2012');
        let expected = "date||credit||debit||balance\n14-01-2012||0||500||2500\n13-01-2012||2000||0||3000\n10-01-2012||1000||0||1000"
        //Act
        let actual = bank.statements;
        //Assert
        expect(actual).toBe(expected);
    })
})