# CLIWordGuessGame

* Command to run the application: node ./index.js

* Technologies used: JavaScript, Node, Constructors, Modules, Inquirer

## Overview
 
This is a command line interface guessing game with a theme of TV shows. It simply asks the user to guess a letter. After each guess it informs the user of whether their guess was correct. Then it reflects a correct answer by revealing all the occurrences of the letter. It then asks the user for the next guess up until the user runs out of guesses or reveals the last unknown letter.

## Architecture

The main program flow is in the index.js file. It handles inputs requests with inquirer. Then it recursively calls the inputLetter() function to keep the program flow going. It creates a random word and then creates a Word object to store and delegate actions to that object. The Word object creates a number of Letter objects to form the Word/phrase. The Letter object handles the task of returning the letter or and underscore depending if whether the word was guessed or not.
