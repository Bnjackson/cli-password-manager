const bcrypt = require('bcrypt');

async function encryptPassword(account) {
    try {
        const hash = await bcrypt.hash(account.password, 10);
        account.password = hash;
        console.log(hash, account);    
    } catch (err) {
        console.error(`Hashing password failed: ${err}`);
    }
    return account;
}

function verifyPassword(password, account) {

}

module.exports = {
    encryptPassword, 
    verifyPassword
}