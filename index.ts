#! urs/bin/env node

import inquirer from "inquirer" ;

const randomNumber = Math.floor(Math.random() *8+1);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please guess a number between 1-8:",
    },
]);

console.log(answer);

if (answer.userGuessedNumber === randomNumber ){
     console.log("Congratulations! you have guessed right number.");
}
else{
    console.log("You have guessed wrong number");
}
    
