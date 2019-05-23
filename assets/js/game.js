//game variables

var wins = 0;
var losses = 0;
var numGuess = 10;
var guessMade = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz" // String to be utilized as array for alphabet selection and character validation
var cpuRandom = alphabet[Math.floor(Math.random()*alphabet.length)] //cpu picks random letter in alphabet array
console.log("This is the random letter: " + cpuRandom) // Console check for random letter generator
console.log("Guesses left: " + numGuess) // Console check for guesses left




document.onkeyup = function(input) { //function occurs on any key up

    var keyHistory = document.getElementById("guessHistory");
    var userWins = document.getElementById("wins");
    var userLosses = document.getElementById("losses");
    // document.getElementById("numGuess").innerHTML = numGuess;
    var userKey = input.key.toLowerCase(); // Changes key input to lowercase for consistency


    reset = function(){ //resets game back to starting position with new random letter
        guessMade = [];
        cpuRandom = alphabet[Math.floor(Math.random()*alphabet.length)];
        numGuess = 10;
        document.getElementById("numGuess").innerHTML = numGuess
        keyHistory.textContent = guessMade;
    }

    if (guessMade.includes(userKey) === false) { // Checks that userKey does NOT exist within guessMade array already
        if (alphabet.includes(userKey)) { // Checks if key press exists within alphabet
            
            console.log(guessMade.includes(userKey))

            console.log(userKey); //console check what user presses

            guessMade.push(userKey); //pushes guesses into guessMade array

            console.log(guessMade); //console check guessMade array

            keyHistory.textContent = guessMade; //prints guessMade array to page

            if (cpuRandom === userKey) { //works on correct guess
                alert("You guessed the letter correctly!");
                wins++;
                userWins.textContent = wins;
                reset();

            } else { //guess counter goes down if incorrect guess
                numGuess--;
                console.log("Guesses left: " + numGuess);
                document.getElementById("numGuess").innerHTML = numGuess; //prints new value for numGuess
                if (numGuess === 0) { //after numGuess--, if numGuess=0, increase loss counter
                    losses++;
                    userLosses.textContent = losses;
                    reset();
                }
            }

        } else { // if key press doesn't exist within alphabet
            alert("That is not a valid letter!");
        }  
    } else {
        alert("You've already guessed that letter!")
    }
}

// console.log("---userKey---")
// console.log(userKey)
// console.log("---history---")
// console.log(history)
// console.log("---userHistory---")
// console.log(userHistory)