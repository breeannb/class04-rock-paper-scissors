// Import from other js 
import getRandomThrow from './get-random-throw.js';
import checkResults from './check-results.js';

// Establish the DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
// const radios = document.querySelectorAll('input');
const winsSpan = document.getElementById('wins-count');
const lossesSpan = document.getElementById('losses-count');
const drawsSpan = document.getElementById('draws-count');
const winsLosses = document.getElementById('message');
const currentRoundResults = document.getElementById('result');

// // Establishing the Const for the 'checked' in the DOM
// const rocksInput = radios[0];
// const paperInput = radios[1];
// const scissorsInput = radios[2];

let winsCount = 0; 
let lossesCount = 0; 
let drawsCount = 0; 

const updateMatchScores = () => {
    winsSpan.textContent = winsCount; 
    lossesSpan.textContent = lossesCount; 
    drawsSpan.textContent = drawsCount; 
}; 

// Event Listeners 
// Play Button
playButton.addEventListener('click', () => {
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    const computerThrow = getRandomThrow(); 
    const playerThrow = selectedChoice.value; 
    const results = checkResults(playerThrow, computerThrow); 

    if (results === 'draw') { 
        drawsCount++; 
        updateMatchScores(); 
        winsLosses.textContent = 'Its a draw! The computer chose: ' + computerThrow; 
        currentRoundResults.style.visibility = 'visible'; 
        
    }
    else if (results === 'win') { 
        winsCount++; 
        updateMatchScores(); 
        winsLosses.textContent = 'Congratulations, you won! The computer chose: ' + computerThrow; 
        currentRoundResults.style.visibility = 'visible'; 
    }
    else if (results === 'lose') { 
        lossesCount++; 
        updateMatchScores(); 
        winsLosses.textContent = "I'm sorry, but you lost this round! The computer chose: " + computerThrow; 
        currentRoundResults.style.visibility = 'visible'; 
    }
});



// // Reset Button 
resetButton.addEventListener('click', () => {
    winsCount = 0; 
    lossesCount = 0; 
    drawsCount = 0; 

    updateMatchScores(); 
    currentRoundResults.style.visibility = 'hidden'; 
}); 
