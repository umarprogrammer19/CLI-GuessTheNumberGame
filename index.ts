#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
const randomNumber = Math.floor(Math.random() * 20 + 1);
let attemp = 0;
while (true) {
    attemp++;
    const answers = await inquirer.prompt([{
        message: chalk.blue("Please Guess a Number Between 1 - 20 =>"),
        name: "userGuessedNumber",
        type: "number",
    }])
    const userGuessedNumber: number = answers.userGuessedNumber;
    if (userGuessedNumber === randomNumber) {
        console.log(chalk.green(`Congratulation You Guessed The Number in ${attemp} attemps.`));
        break;
    } else if (userGuessedNumber === randomNumber + 1 || userGuessedNumber === randomNumber - 1) {
        console.log(chalk.yellow("Too Close! \n"));
    } else if (userGuessedNumber === randomNumber + 2 || userGuessedNumber === randomNumber - 2) {
        console.log(chalk.yellow("Very Close! \n"));
    } else {
        console.log(chalk.red(`You Guessed Wrong Number, Try Again \n`));
    }
};