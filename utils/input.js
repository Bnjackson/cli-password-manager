const readlineSync = require('readline-sync');

function getUserInput(question, choices) {
    const userInput = readlineSync.question(`${question} `).toLowerCase();
    return checkUserInput(userInput) ? userInput : getUserInput(question, choices);

    function checkUserInput(userInput) {
        if (choices.includes(userInput)) {
            return true;
        } else {
            console.log(`Input must be one of the following command ${choices}`);
            return false;
        }
    }
}

function getUserAccountInfo(question) {
    const userInput = readlineSync.question(`${question} `);
    return checkUserInput(userInput) ? userInput : getUserAccountInfo(question);

    function checkUserInput(userInput) {
        const nonSpacePattern = /\S+/;
        // Checks that string contains at least one non space character
        if (nonSpacePattern.test(userInput)) {
            return true;
        } else {
            return false;
        }
    }
}

// function getUserAccountChoice(accounts) {
//     const userChoice = readlineSync.question('What ')
//     function outputAccountChoices(Accounts) {

//     }
// }

module.exports = {
    getUserInput,
    getUserAccountInfo,
    getUserAccountChoice
}