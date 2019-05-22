
var guessMade = [];

var alphabet = "abcdefghijklmnopqrstuvwxyz" // String to be utilized as array for alphabet selection and character validation


document.onkeyup = function(input) {

    var userHistory = document.getElementById("userGuess");

    var userKey = input.key.toLowerCase() // Changes key input to lowercase for consistency

    
    if (alphabet.includes(userKey)) { // Checks if key press exists within alphabet
        
        console.log(userKey);

        guessMade.push(userKey);

        console.log(guessMade);

        userHistory.textContent = guessMade;
    } else {
        alert("That is not a valid letter!")
    }


}

// console.log("---userKey---")
// console.log(userKey)
// console.log("---history---")
// console.log(history)
// console.log("---userHistory---")
// console.log(userHistory)