class Statement
{
    print(transactions)
    {
        let result = "date||credit||debit||balance\n";
        for (let i = transactions.length - 1; i >= 0; i--)
        {
            result += `${transactions[i].date}||${transactions[i].isCredit() ? transactions[i].amount : 0}||${transactions[i].isCredit() ? 0 : -transactions[i].amount}||${transactions[i].balance}`;

            if (i > 0)
            {
                result += '\n';
            }
        }
        return result;
    }
}


module.exports = Statement;