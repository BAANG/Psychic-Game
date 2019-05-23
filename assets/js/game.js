//game variables

var wins = 0;
var losses = 0;
var numGuess = 10;
var guessMade = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz" // String to be utilized as array for alphabet selection and character validation
var cpuRandom = alphabet[Math.floor(Math.random()*alphabet.length)] //cpu picks random letter in alphabet array



document.onkeyup = function(input) { //function occurs on any key up

    var keyHistory = document.getElementById("guessHistory");
    var userWins = document.getElementById("wins");
    var userLosses = document.getElementById("losses");
    var userGuess = document.getElementById("numGuess").innerHTML = numGuess;
    var userKey = input.key.toLowerCase(); // Changes key input to lowercase for consistency

    console.log("This is the random letter: " + cpuRandom) // Console check for random letter generator
    console.log("Guesses left: " + numGuess)
    userGuess.textcontent = numGuess;

    reset = function(){
        guessMade = [];
        cpuRandom = alphabet[Math.floor(Math.random()*alphabet.length)];
        numGuess = 10;
    }

    
    if (alphabet.includes(userKey)) { // Checks if key press exists within alphabet
        
        console.log(userKey); //console check what user presses

        guessMade.push(userKey); //pushes guesses into guessMade array

        console.log(guessMade); //console check guessMade array

        keyHistory.textContent = guessMade;

        if (cpuRandom === userKey) { //works on correct guess
            alert("You guessed the letter correctly!");
            wins++;
            userWins.textContent = wins;
            reset();

        } else { //guess counter goes down if incorrect guess
            numGuess--;
            // userGuess.textcontent = numGuess;
            if (numGuess <= 0) { //after numGuess--, if numGuess=0, increase loss counter
                losses++;
                userLosses.textContent = losses;
                reset();
            }
        }

    } else { // if key press doesn't exist within alphabet
        alert("That is not a valid letter!");
    }
}

// console.log("---userKey---")
// console.log(userKey)
// console.log("---history---")
// console.log(history)
// console.log("---userHistory---")
// console.log(userHistory)