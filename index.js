'use strict';

const inputModule = require('./utils/input.js');

console.log(`
This program is a command line based password manager. 
This program allows you to store your accounts with their username and password. Passwords are encrypted using bcrypt.
The commands for this progam are:
create - create and store a new account
display - display an existing accounts details  
update - update an existing accounts details
delete - delete an existing account
`);

async function main() {
    let anotherCommand = true;
    const question = 'Enter a command';
    const choices = ['create', 'display', 'update', 'delete'];
    while (anotherCommand) {
        const userCommand = inputModule.getUserInput(question, choices);
        console.log(userCommand);
    }
}

function runAgain() {

}

main();

