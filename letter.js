
// * **Letter.js**: Contains a constructor, Letter.  

var inquirer = require("inquirer");
var Letter = require("./letter.js")

//   * A string value to store the underlying character for the letter

letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//   * A boolean value that stores whether that lettr has been guessed yet

var guess;              // guess
var guessed = [];       // Stored guesses

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

function Letter(letters) {
    this.letters = letters;
    this.guessed = false;

    this.guessAgain = function () {
        if (this.letters === " ") {
            return " ";
        } else if (!this.guessed) {
            return " ";
        } else {
            return this.letters;
        }
    }
    
    this.compare = function (results) {
        if (results === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;


//Create a "Prompt" with a series of questions.
function prompt() {

    inquirer.prompt
    ([
        {
            type: "list",
            name: "letters",
            message: "Select a Letter?",
            letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        }
    ])
    
    .then(function (inquirerResponse) {
        if (inquirerResponse.letters === "word") {
            console.log("\nChoice: " + inquirerResponse.letters)
        } 
        else {
        }
    });
};

