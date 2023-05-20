// JavaScript code for the player screens

// Create individual screens for each player

const savedSectionHTML = localStorage.getItem('savedSection');
if (savedSectionHTML) {
  document.getElementById('playerScreens').innerHTML = savedSectionHTML;
  startTimer();
}

 // Function to start the timer
 function startTimer() {
             
  //document.getElementById(`playerScreen-${currentPlayerIndex}`).style.display= "block"
  let timeRemaining = 30;
  updateTimerDisplay(timeRemaining);
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay(timeRemaining);
    if (timeRemaining <= 0) {
      clearInterval(timer);
      submitPlayerEntries();//M
    }
  }, 1000);
  
}

function updateTimerDisplay(timeRemaining) {
  document.getElementById("timerDisplay").textContent = `Time Remaining: ${timeRemaining}s`;
}

function submitPlayerEntries() {
  const currentPlayerScreen = document.getElementById(`playerScreen-${currentPlayerIndex}`);
  currentPlayerScreen.style.display= "none";
  const nameInput = document.getElementById(`name-${currentPlayerIndex}`).value;
  const carInput = document.getElementById(`car-${currentPlayerIndex}`).value;
  const clothingInput = document.getElementById(`clothing-${currentPlayerIndex}`).value;

  // Validate inputs
  if (nameInput.trim() === "" || carInput.trim() === "" || clothingInput.trim() === "") {
    alert("Please fill in all fields!");
    return;
  }

  // Submit entries
  currentPlayerScreen.innerHTML += `
    <tr>
      <td>${nameInput}</td>
      <td>${carInput}</td>
      <td>${clothingInput}</td>
    </tr>
  `;

  // Clear input fields
  document.getElementById(`name-${currentPlayerIndex}`).value = "";
  document.getElementById(`car-${currentPlayerIndex}`).value = "";
  document.getElementById(`clothing-${currentPlayerIndex}`).value = "";

  // Move to the next player
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  document.getElementById("turnDisplay").textContent = `Player's turn: ${players[currentPlayerIndex]}`;

  // Show the pick letter screen for the next player
  // showPickLetterScreen();//
}

function moveToNewPage() {
  window.location.href = "gameControls.html";
}


  