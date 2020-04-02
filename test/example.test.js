// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResults from '../check-results.js';


const test = QUnit.test;

// Testing randomThrow
test('testing all outcomes for rock, paper, scissors', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const playerPaper = 'paper'; 
    const playerRock = 'rock'; 
    const playerScissors = 'scissors'; 
    const compPaper = 'paper'; 
    const compRock = 'rock'; 
    const compScissors = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    
    const throw1 = checkResults(playerPaper, compPaper); 
    const throw2 = checkResults(playerPaper, compRock);
    const throw3 = checkResults(playerPaper, compScissors);
    const throw4 = checkResults(playerRock, compPaper); 
    const throw5 = checkResults(playerRock, compRock);
    const throw6 = checkResults(playerRock, compScissors);
    const throw7 = checkResults(playerScissors, compPaper); 
    const throw8 = checkResults(playerScissors, compRock);
    const throw9 = checkResults(playerScissors, compScissors);

    //Expect
    // Make assertions about what is expected valid result

    expect.equal(throw1, 'draw');
    expect.equal(throw2, 'win');
    expect.equal(throw3, 'lose');
    expect.equal(throw4, 'lose');
    expect.equal(throw5, 'draw');
    expect.equal(throw6, 'win');
    expect.equal(throw7, 'win');
    expect.equal(throw8, 'lose');
    expect.equal(throw9, 'draw');

});
