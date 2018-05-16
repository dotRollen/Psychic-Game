// Set the score number variables and "Guesses so far" array.
var winsScore = 0;
var lossesScore = 0;
var guessesLeft = 10;
var guessesArray = [];

// Set array from A to Z for the computer to guess.
var choices = ["a", "b", "c", "d", "e", 
                "f", "g", "h", "i", "j", 
                "k", "l", "m", "n", "o", 
                "p", "q", "r", "s", "t", 
                "u", "v", "w", "x", "y", 
                "z"];

//Creates a variable that stores a choice from the choices variable.
//Variable is pulled from the array using Math object and the floor
//and random function. Math.random will multiple by full length of the 
//array. Math.floor will then round down the float number to a whole 
//number.
var computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Run this function when uses presses a key.
document.onkeyup = function(event) {
    
    //Creates a variable to store the key the player has pressed.
    var key = event.key;
    var userGuess = key.toLowerCase();

    function guessedTwice(guess, guesses) {
        
        for (var i = 0; i < guesses.length; i++) {
            
            if (guess == (guesses[i])) {

                //Uncomment/comment for debugging isLetter function.
                //console.log("Is a letter, you have typed " + letter);
                return true; 
            }
        }
    }

    //Uncomment for debugging isLetter function.
    //isLetter(userGuess, choices) 

    if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
        
        if (guessesLeft > 1) {
            
            if (guessedTwice(userGuess, guessesArray)) {
                
                alert("You already tried this guess! Choose another one.")

            }

            else if (userGuess == computerChoice) {

                //Uncomment to debug game wins.
                //console.log("You guessed right! Computer Guess  " + computerChoice);

                winsScore++;

                document.getElementById("wins-score").innerHTML = winsScore;
                alert("Human wins!! Take that HAL! Computer chose " + computerChoice)

                guessesLeft = 10;

                document.getElementById("guesses-score").innerHTML = guessesLeft;
                computerChoice = choices[Math.floor(Math.random() * choices.length)];

                guessesArray = [];
                document.getElementById("guesses").innerHTML = guessesArray;
            }   
            
            else {

                //Uncomment to debug game loses.
                //console.log("Guess again! Computer Guess  " + computerChoice);

                guessesLeft--;
                document.getElementById("guesses-score").innerHTML = guessesLeft;

                guessesArray.push(userGuess); 
                document.getElementById("guesses").innerHTML = guessesArray;
            }
        }

        else {

            alert("Game over! Computer wins :(...")

            lossesScore++;

            document.getElementById("losses-score").innerHTML = lossesScore;

            guessesLeft = 10;
            document.getElementById("guesses-score").innerHTML = guessesLeft;

            guessesArray = [];
            document.getElementById("guesses").innerHTML = guessesArray;
        }
    }

    

}