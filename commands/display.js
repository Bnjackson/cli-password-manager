const databaseModule = require('../utils/database.js');
const inputModule = require('../utils/input.js');
const passwordModule = require('../utils/passwordManager.js');

async function getAccountToDisplay() {
    const accounts = await databaseModule.getAccountsData();
    if (accounts.length < 1) {
        console.log(`Accounts is empty so cannot be display`);
    } else {
        const userAccountChoice = await inputModule.getUserAccountChoice(accounts);
        await getPasswordForAccount(userAccountChoice);
    }
}

async function getPasswordForAccount(account) {
    const password = await inputModule.getUserPasswordInput();
    await checkUserPasword(password, account);
    async function checkUserPasword(password, account) {
        if (await passwordModule.verifyPassword(password, account)) {
            account.password = password;
            await displayAccount(account);
        } else {
            console.log('Password inputted does not match hashed password. Try again');
            getPasswordForAccount(account);
        }
    }
}

async function displayAccount(account) {
    console.log(`Account name: ${account.accountName}`);
    console.log(`Username: ${account.username}`);
    console.log(`Password: ${account.password}`);
}

module.exports = {
    getAccountToDisplay
}