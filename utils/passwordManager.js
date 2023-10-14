const bcrypt = require('bcrypt');

async function encryptPassword(account) {
    await bcrypt.hash(account.password, 10, (err, hash) => {
        if (err) {
            console.error(`Hashing password failed: ${err}`);
        } else {
            account.password = hash;            
        }
    });
    return account;
}

function verifyPassword(password, account) {

}

module.exports = {
    encryptPassword, 
    decryptPassword
}