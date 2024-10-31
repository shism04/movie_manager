const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const filePath = path.join(__dirname, 'users.json');
const inserted= false;
function insertUser(fullName, email, password, callback) {
    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) return callback(err);


        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        let users = data ? JSON.parse(data) : [];

       
        let newUser = {fullName: fullName, email: email, password: hashedPassword };

        users.push(newUser);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) return callback(err); 
            callback(null); 
        });

    });
    return inserted;
}

module.exports = {
    insertUser
};
