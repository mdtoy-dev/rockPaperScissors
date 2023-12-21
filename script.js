var choices = ["r", "p", "s"];
var userWins = 0;
var ties = 0;
var losses = 0;

// test comment from james stott

function resetCounts() {
  userWins = 0;
  ties = 0;
  losses = 0;
  document.getElementById("score").innerText = "Wins: " + userWins + ", Ties: " + ties + ", Losses: " + losses;
}

function playGame() {
  var userChoice = prompt("Enter r, p, or s").toLowerCase();
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  function winner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      ties++;
      return "It's a tie";
    } else if (
      (userChoice === "r" && computerChoice === "s") ||
      (userChoice === "p" && computerChoice === "r") ||
      (userChoice === "s" && computerChoice === "p")
    ) {
      userWins++;
      return "You win";
    } else {
      losses++;
      return "You lose";
    }
  }

  // Update UI
  document.getElementById("user-choice").innerText = "User choice: " + userChoice;
  document.getElementById("computer-choice").innerText = "Computer choice: " + computerChoice;

  var result = winner(userChoice, computerChoice);
  document.getElementById("result").innerText = result;

  // Display counts after each round
  document.getElementById("score").innerText = "Wins: " + userWins + ", Ties: " + ties + ", Losses: " + losses;
}

// Play the game initially
playGame();
