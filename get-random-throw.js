export default getRandomThrow;


// Establish User Choice Options and Default Check 

function getRandomThrow() {

let randomThrow = '';
let userChoice = '';

    if (rocksInput.checked){
        userChoice = 'rock';
    } else if {
        userChoice = 'paper';
    } else {
        userChoice = 'scissors';
    }

    if (Math.random() < 0.34){
        randomThrow = 'scissors';
    } else if (randomThrow <= 0.67) {
        randomThrow = 'paper';
    } else {
        randomThrow = 'scissors';
    }
};

// checkResult
function checkResults(player, computer){
    if (player === computer){
        return true;
    } else { 
        return false; 
    }
}

