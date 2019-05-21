const Word = require("./word");
const inquirer = require("inquirer");
const words = ["Game of Thrones", "NCIS", "New Amsterdam", "The Blacklist", "MARS",
    "Deadliest Catch", "The Last Alaskans", "The Gifted", "Saturday Night Live", "Veep", 
    "Big Bang Theory", "The Walking Dead", "Better Call Saul", "The X Factor", "American Idol",
    "Dancing With the Stars", "The Amazing Race", "Survivor"];
let word = "";
let numberOfGuesses = 0;
let guesses = [];

function randomizeWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    word = new Word(randomWord);
    numberOfGuesses = randomWord.length + Math.ceil(randomWord.length * 0.25);
    guesses = [];
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
            if (guesses.indexOf(answers.letter) == -1) {
                guesses.push(answers.letter);
                numberOfGuesses--;
                if (word.guessLetter(answers.letter)) {
                    console.log("\nCORRECT!!!\n");
                } else {
                    console.log("\nINCORRECT!!!\n");
                }
                if (word.isWordGuessed()) {
                    console.log(word.toString() + "\n");
                    console.log("You guessed the word!!! You're great! Next word...\n");
                    randomizeWord();
                } else {
                    console.log(`Number of guesses left: ${numberOfGuesses}\n`);
                    if (numberOfGuesses <= 0) {
                        console.log("You're out of guesses! Try again!!!\n");
                        randomizeWord();
                    }
                }
            } else {
                console.log(`\nYou already guessed ${answers.letter}. Please select another letter.\n`);
            }
            inputLetter();
        });
}

randomizeWord();
inputLetter();