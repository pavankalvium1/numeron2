// Iteration 1: Making the play button in the index.html functional.
const play = document.getElementById("play-button");

// Description: When the play button is clicked the game.html page should be opened
play.onclick = () => {
  location.href = "./game.html";
};