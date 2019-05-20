const Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    let myLetters = word.split("");
    myLetters.forEach(letter => {
        this.letters.push(new Letter(letter));
    });
    this.toString = function() {
        let result = "";
        this.letters.forEach(element => {
            result += element + " ";
        });
        return result;
    }
    this.guessLetter = function(letter) {
        this.letters.forEach(element => {
            return element.guessLetter(letter);
        });
    }
    this.isWordGuessed = function() {
        for (let i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].isGuessed) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Word;
