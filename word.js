const Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    let myLetters = word.split("");
    myLetters.forEach(letter => {
        this.letters.push(new Letter(letter));
    });
    this.toString = function () {
        let result = "";
        this.letters.forEach(element => {
            result += element + " ";
        });
        return result;
    }
    this.guessLetter = function (letter) {
        let successfulGuess = false;
        this.letters.forEach(element => {
            if (element.underlyingLetter !== " "
                && element.guessLetter(letter)) {
                console.log("Successful guess!");
                successfulGuess = true;
            }
        });
        return successfulGuess;
    }
    this.isWordGuessed = function () {
        for (let i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].isGuessed) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Word;
