const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'users.json');

if (require('./users.json')){
const users= require('./users.json');

function getAllUsers(){
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);
    return users;
}

async function findUser(email, password) {
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);

    const user = users.find(user => user.email === email);
  
    if (user) {
      const same = await bcrypt.compare(password, user.password);
      return same ? user : null;
    }
  
    return null;
}

function getUserMovies(id) {
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);

    const user = users.find(user => user.id === id);
    return user ? user.films : [];
}

function findMovie(idUser,idFilm){
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);

    const userFilms= getUserMovies(idUser);
    const userFilm= userFilms.find(userFilm=> userFilm.id === Number(idFilm));
    return userFilm;
}

module.exports={
    getAllUsers,
    findUser,
    getUserMovies,
    findMovie
}
}