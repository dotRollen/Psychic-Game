// Set the score number variables and "Guesses so far" array.
var winsScore = 0;
var lossesScore = 0;
var guessesLeft = 10;
var guessesSoFar = [];

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



    function isLetter(letter, alphabet) {
        
        for (var i = 0; i < choices.length; i++) {
            
            if (letter == (alphabet[i])) {

                //Uncomment/comment for debugging isLetter function.
                //console.log("Is a letter, you have typed " + letter);
                return true; 
            }
        }
    }

    //Uncomment for debugging isLetter function.
    //isLetter(userGuess, choices) 

    if (isLetter(userGuess, choices)) {
        
        if (guessesLeft > 1) {
            
            if (userGuess == computerChoice) {

                //Uncomment to debug game wins.
                //console.log("You guessed right! Computer Guess  " + computerChoice);

                winsScore++;
                document.getElementById("wins-score").innerHTML = winsScore;
                alert("Human wins!! Take that HAL! Computer chose " + computerChoice)
                guessesLeft = 10;
                document.getElementById("guesses-score").innerHTML = guessesLeft;
                computerChoice = choices[Math.floor(Math.random() * choices.length)];
            }   
            
            else {

                //Uncomment to debug game loses.
                //console.log("Guess again! Computer Guess  " + computerChoice);

                guessesLeft--;
                document.getElementById("guesses-score").innerHTML = guessesLeft;
                guessesSoFar.push(userGuess); 
                document.getElementById("guesses").innerHTML = guessesSoFar;
            }
        }

        else {

            alert("Game over! Computer wins :(...")
            lossesScore++;
            document.getElementById("losses-score").innerHTML = lossesScore;
            guessesLeft = 10;
            document.getElementById("guesses-score").innerHTML = guessesLeft;
            guessesSoFar.forEach(){
                console.log(item + index)
            }

        }
    }

    

}