const Word = require("./word");
const inquirer = require("inquirer");
const words = ["Game of Thrones", "Pollywoggle", "Transmogrify"];
let word = new Word(getRandomWord());

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function inputLetter() {
    console.log(word.toString());
    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: "Guess a letter: "
        }
    ])
    .then(answers => {
        word.guessLetter(answers.letter);
        if (word.isWordGuessed()) {
            console.log(word.toString());
            console.log("CORRECT! You're great!");
            word = new Word(getRandomWord());
        }
        inputLetter();
    });
}

inputLetter();