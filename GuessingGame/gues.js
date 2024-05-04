const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const messageElement = document.getElementById("message");
  const attemptsElement = document.getElementById("attempts");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    messageElement.textContent = "Invalid input: Please input a number between 1 and 10.";
    return;
  }

  attempts++;
  attemptsElement.textContent = `Attempts: ${attempts}/5`;

  if (userGuess < randomNumber) {
    messageElement.textContent = "Too low! Try again.";
  } else if (userGuess > randomNumber) {
    messageElement.textContent = "Too high! Try again.";
  } else {
    messageElement.textContent = `Congratulations! You've guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
    restartGame();
  }

  if (attempts >= 5) {
    messageElement.textContent = `Game over: You've reached the maximum number of attempts (${attempts}). The correct number was ${randomNumber}.`;
    restartGame();
  }}

function restartGame() {
  attempts = 0;
  randomNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("userGuess").value = "";
  messageElement.textContent = "Take a guess!";
  attemptsElement.textContent = "Attempts: 0/5";
}