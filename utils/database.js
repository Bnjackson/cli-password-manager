const fs = require('fs');

const filePath = '../data/accounts.json';

async function getAccountsData() {
    try {
        const data = await fs.readFile(filePath);
        console.log(JSON.parse(data));
    } catch (error) {
        console.error(`Error getting data from accounts file:
        ${error}`);
    }
}

async function writeAccountsFile(updatedAccounts) {
    try {
        await fs.writeFile(filePath, updatedAccounts);
        console.log('Accounts successfully written');
    } catch (error) {
        console.error(`Error adding account to accounts file`)
    }
}

module.exports = {
    getAccountsData,
    writeAccountsFile
}