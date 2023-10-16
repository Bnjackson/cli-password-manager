const bcrypt = require('bcrypt');

async function encryptPassword(account) {
    try {
        const hash = await bcrypt.hash(account.password, 10);
        account.password = hash; 
    } catch (err) {
        console.error(`Hashing password failed: ${err}`);
    }
    return account;
}

async function verifyPassword(userEnteredPassword, account) {
    try {
        const match = await bcrypt.compare(userEnteredPassword, account.password);
        if (match) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error('Error comparing passwords', err);
    }
}

module.exports = {
    encryptPassword, 
    verifyPassword
}