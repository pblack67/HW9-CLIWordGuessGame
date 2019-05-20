function Letter(letter) {
    this.underlyingLetter = letter;
    this.displayLetter = "_";
    this.isGuessed = (letter === " ");
    this.toString = function () {
        if (this.isGuessed) {
            return this.underlyingLetter;
        } else {
            return this.displayLetter;
        }
    }
    this.guessLetter = function (letter) {
        if (!this.isGuessed) {
            if (letter.toLowerCase() === this.underlyingLetter.toLowerCase()) {
                this.isGuessed = true;
                return true;
            }
        }
        return false;
    }
}

module.exports = Letter;
