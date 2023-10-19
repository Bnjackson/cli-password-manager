const databaseModule = require('../utils/database.js');
const inputModule = require('../utils/input.js');
const passwordModule = require('../utils/passwordManager.js');

async function createAccount() {
    let account = {};
    const accounts = await databaseModule.getAccountsData();

    account.accountName = inputModule.getUserAccountInfo('What is your account name:');
    account.username = inputModule.getUserAccountInfo('What is your accounts userName:');
    account.password = inputModule.getUserAccountInfo('What is your accounts password:');
    return checkAccount(account, accounts) ? await addAccountToAccounts(account, accounts) : createAccount();
}

function checkAccount(account, accounts) {
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i]['accountName'] === account.accountName) {
            // Check that accountName does not match an already existing account. Otherwise messes up getting an account.
            console.log('Account name matches an already existing account.');
            return false;
        }
    }
    return true;
}

async function addAccountToAccounts(checkedAccount, accounts) {
    checkedAccount = await passwordModule.encryptPassword(checkedAccount);
    accounts.push(checkedAccount);
    await databaseModule.writeAccountsFile(accounts);
}

module.exports = {
    createAccount
}