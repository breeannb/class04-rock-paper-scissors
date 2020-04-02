// Export file 

// Allows random number to gernate and return rock, paper or scissors
export default function getRandomThrow(){
    let computerThrow = Math.ceil(Math.random() * 3); 

    if (computerThrow === 1){
        return 'rock';
    } else if (computerThrow === 2) {
        return 'paper';
    } else if (computerThrow === 3) {
        return 'scissors';
    }
} 
