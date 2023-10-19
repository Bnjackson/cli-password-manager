'use strict';

const inputModule = require('./utils/input.js');
const createModule = require('./commands/create.js');
const displayModule = require('./commands/display.js');
const updateModule = require('./commands/update.js');
const deleteModule = require('./commands/delete.js');

console.log(`
This program is a command line based password manager. 
This program allows you to store your accounts with their username and password. Passwords are encrypted using bcrypt.

The commands for this progam are:
create - create and store a new account
display - display an existing accounts details  
update - update an existing accounts details
delete - delete an existing account`);

async function main() {
    let anotherCommand = true;
    // Variable starts as true controls whether while loop runs. Is changed by runAgain function by asking user if they want to input another command.
    const question = 'Enter a command';
    const choices = ['create', 'display', 'update', 'delete'];
    // Question and choices are passed into getUserInput function.
    while (anotherCommand) {
        const userCommand = inputModule.getUserInput(question, choices);
        if (userCommand === 'create') {
            await createModule.createAccount();
        } else if (userCommand === 'display') {
            await displayModule.getAccountToDisplay();
        } else if (userCommand === 'update') {
            await updateModule.getAccountToUpdate();
        } else if (userCommand === 'delete') {
            await deleteModule.deleteAccount();
        }
        runAgain() ? anotherCommand = true : anotherCommand = false; 
    }
    console.log('Thank you for using this program');
}

function runAgain() {
    const question = 'Do you want to enter another command? yes/no';
    const choices = ['yes', 'y', 'no', 'n'];
    const userChoice = inputModule.getUserInput(question, choices);
    if (userChoice === 'yes' || userChoice === 'y') {
        return true;
    } else if (userChoice === 'no' || userChoice === 'n') {
        return false;
    }
}

main();