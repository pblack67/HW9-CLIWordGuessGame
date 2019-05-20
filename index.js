const Word = require("./word");
const inquirer = require("inquirer");
const words = ["Game of Thrones", "Pollywoggle", "Transmogrify"];
let word = new Word(getRandomWord());

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function inputLetter() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: "Guess a letter: "
        }
    ])
    .then(answers => {
        word.guessLetter(answers.letter);
        console.log(word.toString());
        inputLetter();
    });
}

inputLetter();