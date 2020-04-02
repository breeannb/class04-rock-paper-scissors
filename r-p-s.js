// Import from other js 
import getRandomThrow from './get-random-throw';
import checkResults from './check-results';

// Establish the DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const radios = document.querySelectorAll('input');
const winsSpan = document.getElementById('wins-count');
const lossesSpan = document.getElementById('losses-count');
const drawsSpan = document.getElementById('draws-count');

// Establishing the Const for the 'checked' in the DOM
const rocksInput = radios[0];
const paperInput = radios[1];
const scissorsInput = radios[2];

let winsCount = 0; 
let lossesCount = 0; 
let drawsCount = 0; 

const updateMatchScores = () => {
    winsSpan.textContent = winsCount; 
    lossesSpan.textContent = lossesCount; 
    drawsCount.textContent = drawsCount; 
}; 

// Event Listeners 
// Play Button
playButton.addEventListener('click', () => {
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    const computerThrow = getRandomThrow; 
    const playerThrow = selectedChoice.nodeValue; 
    const results = checkResults(playerThrow, computerThrow); 

    if (results === 'draw') { 
        drawsCount++; 

    }




});



// // Reset Button 
// resetButton.addEventListener('click', () => {

// }); 



 if (rocksInput.checked){
    userChoice = 'rock';
} else if (rocksInput) {
    userChoice = 'paper'; 
} else {
    userChoice = 'scissors';     
}