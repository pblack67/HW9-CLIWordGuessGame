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
            element.guessLetter(letter);
        });
    }
}

// let word = new Word("Game of Thrones");
// // console.log(word);
// console.log(word.toString());
// word.guessLetter("e");
// console.log(word.toString());
// word.guessLetter("m");
// console.log(word.toString());
// word.guessLetter("h");
// console.log(word.toString());

