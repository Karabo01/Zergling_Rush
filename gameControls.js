// JavaScript code for the game controls screen

var players = JSON.parse(localStorage.getItem("players"));
// Game variables
let currentPlayerIndex = 0;
let timer;
let timeLimit = 30; // Time limit for each turn in seconds
startGame();

// Function to start the game
function startGame() {
  currentPlayerIndex = 0;
  document.getElementById("turnDisplay").textContent = `Player's turn: ${players[currentPlayerIndex]}`;
  showPickLetterScreen();
}

// Function to show the pick letter screen
function showPickLetterScreen() {
  document.getElementById("pickLetterScreen").style.display = "block";
  document.getElementById("pickLetterButton").addEventListener("click", pickRandomLetter);
  
}

    // Function to pick a random letter
    function pickRandomLetter(event) {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];
        document.getElementById("pickedLetterDisplay").textContent = `Picked Letter: ${randomLetter}`;
        document.getElementById("pickLetterScreen").style.display = "block";
        //letters.splice(indexOf(randomLetter), 1);
        localStorage.setItem("randomLetter", JSON.stringify(randomLetter));
        //startTimer();
        moveToNewPage();
        
      }
  
     

  function moveToNewPage() {
    window.location.href = "playerScreens.html";
  }

  

  



  
  
