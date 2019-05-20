function Letter(letter) {
    this.underyingLetter = letter;
    this.displayLetter = "_";
    this.isGuessed = false;
    this.toString = function () {
        if (this.isGuessed) {
            return this.underyingLetter;
        } else {
            return this.displayLetter;
        }
    }
    this.guessLetter = function(letter) {
        if (letter === this.underyingLetter) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;

// let letter = new Letter("a");
// console.log(letter.toString());
// letter.guessLetter("b");
// console.log(letter.toString());
// letter.guessLetter("a");
// console.log(letter.toString());
