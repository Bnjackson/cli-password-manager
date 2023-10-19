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

async function getUserAccountChoice(accounts) {
    const userChoice = readlineSync.question('What is the name of the account: ');
    const userAccountChoice = checkUserAccountChoice(userChoice, accounts);
    if (userAccountChoice) {
        return userAccountChoice
    } else {
        return getUserAccountChoice(accounts);
    }
    function checkUserAccountChoice(userChoice, accounts) {
        for (let i = 0; i < accounts.length; i++) {
            if (userChoice === accounts[i].accountName) {
                return accounts[i];
            }
        }
        console.log('Inputted user account does not match account in database.');
        return false;
    }
}

async function getUserPasswordInput() {
    const userPasswordInput = readlineSync.question('Enter your account password: ');
    return userPasswordInput;
}

module.exports = {
    getUserInput,
    getUserAccountInfo,
    getUserAccountChoice,
    getUserPasswordInput
}