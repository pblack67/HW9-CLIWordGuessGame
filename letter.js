function Letter(letter) {
    this.underyingLetter = letter;
    this.displayLetter = "_";
    this.isGuessed = (letter === " ");
    this.toString = function () {
        if (this.isGuessed) {
            return this.underyingLetter;
        } else {
            return this.displayLetter;
        }
    }
    this.guessLetter = function(letter) {
        if (letter.toLowerCase() === this.underyingLetter.toLowerCase()) {
            this.isGuessed = true;
        }
        return this.isGuessed;
    }
}

module.exports = Letter;
