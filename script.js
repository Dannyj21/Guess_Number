
// Global Variables
let randomNumber;
let attempts;
let wins = 0;
let losses = 0;

// Initialize game
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    attempts = 7;
    document.getElementById("remainingAttempts").textContent = attempts;
    document.getElementById("feedback").textContent = "";
    document.getElementById("guesses").textContent = "";
    document.getElementById("playerGuess").value = "";
    document.getElementById("guessButton").style.display = "inline";
    document.getElementById("resetButton").style.display = "none";
    console.log("Random Number:", randomNumber); // For debugging
}

// Check player's guess
function checkGuess() {
    const guess = parseInt(document.getElementById("playerGuess").value);
    const feedback = document.getElementById("feedback");
    const guesses = document.getElementById("guesses");

    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99.";
        feedback.style.color = "red";
        return;
    }

    attempts--;
    document.getElementById("remainingAttempts").textContent = attempts;

    if (guess === randomNumber) {
        feedback.textContent = "Congratulations! You've guessed it!";
        feedback.style.color = "green";
        wins++;
        document.getElementById("wins").textContent = wins;
        endGame();
    } else if (attempts === 0) {
        feedback.textContent = `You Lost! The number was ${randomNumber}.`;
        feedback.style.color = "red";
        losses++;
        document.getElementById("losses").textContent = losses;
        endGame();
    } else {
        feedback.textContent = guess > randomNumber ? "Too high!" : "Too low!";
        feedback.style.color = "orange";
        guesses.textContent += guess + " ";
    }
}

// End the game by showing the reset button and hiding the guess button
function endGame() {
    document.getElementById("guessButton").style.display = "none";
    document.getElementById("resetButton").style.display = "inline";
}

// Event Listeners
document.getElementById("guessButton").addEventListener("click", checkGuess);
document.getElementById("resetButton").addEventListener("click", initializeGame);

// Start the game for the first time
initializeGame();
