const bcrypt = require('bcrypt');
if (require('./users.json')){
const users= require('./users.json');

function getAllUsers(){
    return users;
}

async function findUser(email, password) {
    const user = users.find(user => user.email === email);
  
    if (user) {
      const same = await bcrypt.compare(password, user.password);
      return same ? user : null;
    }
  
    return null;
}

module.exports={
    getAllUsers,
    findUser
}
}