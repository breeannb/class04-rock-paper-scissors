// Import from other js 

// Establish the DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const radios = document.querySelectorAll('input');

const rocksInput = radios[0];
const paperInput = radios[1];
const scissorsInput = radios[2];


// function herd 

let userChoice = '';
let computerChoice = '';

if (rocksInput.checked){
    userChoice = 'rock';
}
else {
    userChoice = 'paper';
}
else {
    userChoice = 'scissors';
}


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
