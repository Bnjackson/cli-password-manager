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

module.exports = {
    getUserInput
}