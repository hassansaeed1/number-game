#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function wellcome() {
    let tittle = chalkAnimation.rainbow("Develp by Hassan Sheikh \n Let start the Game");
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
    tittle.stop();
}
await wellcome();
async function guessGame() {
    const systemAnswer = Math.floor(Math.random() * 10);
    const userAnswer = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter your guess number b/w 1 to 10",
        },
    ]);
    console.log(`System Answer :${systemAnswer} User Answer :${userAnswer.userGuess}`);
    const { userGuess } = userAnswer;
    if (userGuess === systemAnswer) {
        console.log(chalk.greenBright("Yesss your answer is correct \n you win"));
    }
    else {
        console.log(chalk.redBright("please try again \n best luck for the next"));
    }
}
async function startAgain() {
    do {
        await guessGame();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to try again? y/n"
        });
    } while (again.restart === "y" || again.restart === "Y" || again.restart === "yes" || again.restart === "YES");
}
await startAgain();
