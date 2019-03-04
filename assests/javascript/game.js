//not working

var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var usersGuess = [];
var wins = 0;
var losses = 0;
var guesses = 9;
var remaining = 9;
var guessing = 0;

function randomLetter(array) {
  return array[Math.floor(array.length * Math.random())];
}

var Computer = randomLetter(letters);
console.log("Computer guess: " + Computer);

document.onkeypress = function(event) {
  var userGuess = event.key;

  if (userGuess == Computer) {
    remaining--;
    guesses--;
    // console.log("guesses: " + guesses);
    $("#guesses").text(guesses);
  } else if (userGuess === Computer) {
    wins++;
    // console.log("wins: " + wins);
    $("#wins").text(wins);
    alert("You win");
    reset();
  }
  if (guesses == 0) {
    losses++;
    // console.log("losses: " + losses);
    $("#losses").text(losses);
    reset();
  }
  function reset() {
    guesses = 9;
    remaining = 9;
    var Computer = randomLetter(letters);
    lettersGuessed;
    // console.log(Computer);
  }
};
