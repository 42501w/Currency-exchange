#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1.0, // Base Currency
    EUR: 0.83,
    GBP: 0.72,
    JPY: 109.77,
    AUD: 1.29,
    CAD: 1.25,
    PKR: 278,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "PKR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "PKR"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let Amount = user_answer.amount;
let baseAmount = Amount / fromAmount; // USD base currency // 4
let convertedAmount = Math.round(baseAmount * toAmount); // Round the result to the nearest integer
console.log(convertedAmount);
