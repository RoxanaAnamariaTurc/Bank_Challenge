## Bank Challenge

* User story 1
  As a user,
  I want to be able to deposit
  money into my account

 * User story 2
  As a user,
  I would like to withdraw 
  money from my account

* User story 3
  As a user,
  I would like to see the date
  of each transaction and the balance after this

* User story 4
  As a user,
  I would like to know if a transaction
  is a deposit or a withdraw

* User story 5
  As a user,
  I would like to print my statements  

* User story 6
  As a user,
  I would like the bank to give me my statements


### Domain model


| Object      | Properties            | Message            | Output             |
| ----------- | --------------------- | ------------------ | ------------------ |
| Bank        | @transactions[@array] | deposit()          |                    |
|             | balance               | withdraw()         |                    |
|             | statement             | get statements()   | array@transactions |
|             |                       | get balance()      | number             |
|             |                       | get transactions() | array@transactions |
| Transaction | amount                | get amount()       | number             |
|             | date                  | get date()         | String             |
|             | balance               | get balance()      | number             |
|             |                       | isCredit()         | boolean            |
| Statement   |                       | print()            | array@transactions |

