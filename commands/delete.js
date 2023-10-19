const databaseModule = require('../utils/database.js');
const inputModule = require('../utils/input.js');
const passwordModule = require('../utils/passwordManager.js');

async function deleteAccount() {
    const accounts = await databaseModule.getAccountsData()
    // Will not run if user has not added any accounts
    if (accounts.length >= 1) {
        const accountToDelete = await inputModule.getUserAccountChoice(accounts);
        await passwordLogin(accountToDelete);
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].accountName === accountToDelete.accountName) {
                accounts.splice(i, 1);
            }
        }
        await databaseModule.writeAccountsFile(accounts);
        console.log('Account successfully deleted');
    }
    console.log('There are no accounts to delete');
}

async function passwordLogin(account) {
    let correctPassword = false;
    // Loop will run until user enters a password that matches with the hashed account password 
    while (!correctPassword) {
        const passwordAttempt = await inputModule.getUserPasswordInput();
        if (await passwordModule.verifyPassword(passwordAttempt, account)) {
            correctPassword = true;
        } else {
            console.log('Password is incorrect please try again.');
        }
    }
}

module.exports = {
    deleteAccount
}