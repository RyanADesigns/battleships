
var randomLoc = Math.floor(Math.random() * 5);
var loca1 = randomLoc;
var loca2 = loca1 + 1;
var loca3 = loca2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk === false) {
  guess = prompt("whats your guess?");
  if (guess < 0 || guess > 6) {
    alert("please enter a number between 1 and 6");
} else {
    guesses = guesses + 1;
  
  if (guess == loca1 || guess == loca2 || guess || loca3) {
    alert("hit!");
    hits = hits + 1;
    
    if (hits == 3) {
      isSunk = true;
      alert("you sunk my ship");
  
  
    } else {
    alert("that sucks try again");
      }  
    } 

  }
}

var stats = "you took " + guesses + " guesses to sink the battleship," + "Which means your shooting accuracy was " + (3/guesses);
alert (stats);