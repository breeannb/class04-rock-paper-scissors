// Import from other js 
import getRandomThrow from '../get-random-throw.js';
import checkResults from '../get-random-throw.js';

// Establish the DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const radios = document.querySelectorAll('input');

// Establishing the Const for the 'checked' in the DOM
const rocksInput = radios[0];
const paperInput = radios[1];
const scissorsInput = radios[2];



// Event Listeners 
// Play Button
playButton.addEventListener('click', () => {
    console.log ('rocks is checked', rocksInput.checked);
    console.log ('paper is checked', paperInput.checked);
    console.log ('scissors is checked', scissorsInput.checked);
});

// Reset Button 
resetButton.addEventListener('click', () => {

}); 



// if (rocksInput.checked){
//     userChoice = 'rock';
// } else if (rocksInput) {
//     userChoice = 'paper'; 
// } else {
//     userChoice = 'scissors';     
// }
// }