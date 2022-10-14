## Bank Challenge

### Project Objectives

This project aimed to assist the Object Oriented approach to creating an program in Javascript

### Technologies Used

JavaScript

### Project Approach


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


#### Domain model


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

### Getting Started

Fork and clone this repository to your local machine
In the terminal cd into the folder where the project is saved and npm i to install dependencies
Use npm test to run all the tests from the project

### Project Review

This project was really helpful when it comes to understanding the OOP concepts, how to work with data structures and algorithms and how to use the TDD approach in writting code

### Potential Next Steps for the Project

As a next step I believe this project can be connected to a user interface and a database and turned into a full stack app.






