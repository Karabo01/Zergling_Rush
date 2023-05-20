 // JavaScript code for the game
    
    
    // Array to store player names
    var players = [];

   

    // Function to register players
    function registerPlayer1() {
       
      // event.preventDefault();

      const playerName1 = document.getElementById("playerName1").value;
      players.push(playerName1);
      document.getElementById("playerName1").value = "";
      if(players>1){
        document.getElementById("btnContinue").disabled= false;
      }
    }

    function registerPlayer2() {
      const playerName2 = document.getElementById("playerName2").value;
      players.push(playerName2);
      
      document.getElementById("playerName2").value = "";
      if(players.length>1){
        document.getElementById("btnContinue").disabled= false;
      }
    }   
      
    function registerPlayer() {
      
       if (players.length >= 2 && players.length <= 8) {
        
        // Create individual screens for each player
        for (let i = 0; i < players.length; i++) {
          const playerScreen = document.createElement("section");
          playerScreen.id = `playerScreen-${i}`;
          playerScreen.innerHTML = `
            <h2>${players[i]}'s Screen</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Car brand</th>
                  <th>Clothing brand</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" id="name-${i}" ></td>
                  <td><input type="text" id="car-${i}" ></td>
                  <td><input type="text" id="clothing-${i}" ></td>
                </tr>
              </tbody>
            </table>
          `;
          document.getElementById("playerScreens").appendChild(playerScreen);
          ;
          
        }
        
        // console.log(document.getElementById("playerScreens"));
        moveToNewPage();
      }
    }
    
    function moveToNewPage() {

      const mySectionHTML = document.getElementById('playerScreens').innerHTML;
      localStorage.setItem('savedSection', mySectionHTML);

      document.getElementById("playerScreens").style.display="none";
      document.getElementById("registrationScreen").style.display="none";
      window.location.href = "gameControls.html";
    }


    // Function to submit player entries
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
      showPickLetterScreen();
    }

    
