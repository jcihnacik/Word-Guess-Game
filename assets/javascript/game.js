//array of hangman answers//

var answers = [
    "trashman",
    "bird",
    "nightman",
    "cricket",
    "denimchicken",
    "jabroni",
    "mcpoyles",
  ]
  
  var puzzle;
  var puzzleActive = []; //array where i push characters to for the game in play
  var totalGuesses = 10;
  var userGuesses = []; //letters user picks
  var puzzlePieces = []; //word user builds
  var guessesRemaining = 0;
  var wins = 0;
  var losses = 0;
  
  //DOCUMENT READY FUNCTION STARTS WRAPPING HERE!!!!!
  var puzzle = answers[Math.floor(Math.random()*answers.length)];
     console.log("The current answer is " + puzzle);
  
  for (var i = 0; i < puzzle.length; i++) {
      puzzleActive.push("_"); //pushes an underscore to the puzzleActive array for every letter in puzzle
    }
  
  document.getElementById("begin-btn").onclick = function () {startGame()};
  
   function startGame(){
     
     guessesRemaining = totalGuesses;
     document.getElementById("remaining-guesses").innerHTML =   ("You've got " + guessesRemaining + " guesses left, guy");
     document.getElementById("win-count").innerHTML = ("You've won " + wins + " times");
  
     
  //generates a random answer from answers array above which becomes the puzzle//
   
    
   
    
     
     document.getElementById("current-puzzle").innerHTML = puzzleActive.join(" "); //writes the value of puzzleActive to the DOM in the current-puzzle div; converts the seperate contents of the puzzleActive array, aka the underscores, into a string that will appear as the blank underscore-d out puzzle word to be guessed by the user
     
   }
  
  var remainingLetters = puzzleActive.length;
  
  while (remainingLetters > 0) { 
    document.onkeyup = function (event) {
      var guess = event.key;
      if (guess.length !== 1) {
        alert ("Just enter one letter at a time ya turkey");
      } else { 
        for (var j = 0; j < puzzle.length; j++) {
        if (puzzle[j] === guess) {
          puzzleActive[j] = guess;
          remainingLetters--;
        } else {
          if (puzzle[j] !== guess) {
            userGuesses.push(guess);
            document.getElementById("letters-guessed").innerHTML = guess;
            guessesRemaining--;
          }
        }
      }
        
      }
    }
    
  }
   
  // document.onkeyup = function (event) {
  //   var guess = event.key;
  //   if guess = puzzleActive 
    
  // }
  
  //     // function evaluating the positions of the given letter in the currentWord string
    
  //     function findPuzzleLetters(letter) {
  //         var position = new Array();
  //         for (i = 0 ; i < puzzle.length; i++) {
  //             if (puzzle[i] === letter) position.push(i);
  //         }
  //         return position;
  //     } 
  
  // document.onKeyUp = function (event){
  //   var guess = event.key;
    
    
    
    
    
  //   var j;
  //   var position = findPuzzleLetters(letter);
    
  //   if (position.length){
  //     for (j = 0; j < position.length; j++) {
  //       puzzleActive[position[j]] = userGuesses;
  //       document.getElementById("current-puzzle").innerHTML = puzzleActive.join(" ");
  //     }
      
  //   else {
  //     document.getElementById("letters-guessed").innerHTML = userGuesses + " ";
  //     guessesRemaining--;
  //     document.getElementById("remaining-guesses").innerHTML = guessesRemaining;
  //     }
  //   }
  // }