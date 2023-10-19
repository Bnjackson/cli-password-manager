const inputModule = require('../utils/input.js');
const databaseModule = require('../utils/database.js');
const passwordModule = require('../utils/passwordManager.js');

async function getAccountToUpdate() {
    const accounts = await databaseModule.getAccountsData();
    if (accounts.length >= 1) {
        const userAccountChoice = await inputModule.getUserAccountChoice(accounts);
        const updatedAccount = await createUpdatedAccount(accounts, userAccountChoice);
        updateAccounts(updatedAccount, accounts);
    }
    console.log('There are no accounts to update');
}

async function createUpdatedAccount(accounts, userAccountChoice) {
    let updatedAccount = {};
    updatedAccount.accountName = userAccountChoice.accountName;
    updatedAccount.username = inputModule.getUserAccountInfo('What is the updated username:');
    updatedAccount.password = inputModule.getUserAccountInfo('What is the updated password:');
    updatedAccount = await passwordModule.encryptPassword(updatedAccount);
    return updatedAccount;
}

function updateAccounts(updatedAccount, accounts) {
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].accountName === updatedAccount.accountName) {
            accounts[i] = updatedAccount;
        }
    }
    addUpdatedAccounts(accounts);
}

async function addUpdatedAccounts(updatedAccounts) {
    await databaseModule.writeAccountsFile(updatedAccounts);
}

module.exports = {
    getAccountToUpdate
}