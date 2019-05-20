const Word = require("./word");
const inquirer = require("inquirer");
const words = ["Game of Thrones", "Pollywoggle", "Transmogrify"];
let word = new Word(getRandomWord());

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function inputLetter() {
    console.log(word.toString() + "\n");
    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: "Guess a letter: "
        }
    ])
    .then(answers => {
        if (word.guessLetter(answers.letter)) {
            console.log("\nCORRECT!!!\n");
        } else {
            console.log("\nINCORRECT!!!\n");
        }
        if (word.isWordGuessed()) {
            console.log(word.toString() + "\n");
            console.log("CORRECT! You're great! Next word...\n");
            word = new Word(getRandomWord());
        }
        inputLetter();
    });
}

inputLetter();