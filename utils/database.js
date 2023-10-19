const fs = require('fs');

const filePath = './data/accounts.json';
const jsonSpace = 2;

async function getAccountsData() {
    try {
        const data = await fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error getting data from accounts file:
        ${error}`);
    }
}

async function writeAccountsFile(updatedAccounts) {
    try {
        const data = JSON.stringify(updatedAccounts, null, jsonSpace);
        await fs.writeFileSync(filePath, data, 'utf8');
        console.log('Accounts successfully written');
    } catch (error) {
        console.error(`Error adding account to accounts file:
        ${error}`)
    }
}

module.exports = {
    getAccountsData,
    writeAccountsFile
}