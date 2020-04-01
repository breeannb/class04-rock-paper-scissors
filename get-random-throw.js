export default getRandomThrow;

let randomThrow = '';

function getRandomThrow() { 
    if (Math.random() < 0.34){
        randomThrow = 'scissors';
    } else if (randomThrow <= 0.67) {
        randomThrow = 'paper';
    } else {
        randomThrow = 'scissors';
    }
}
