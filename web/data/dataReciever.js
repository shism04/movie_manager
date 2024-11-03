const fs = require('fs');
const path = require('path');
const usersProv=require('./dataProvider');
const bcrypt = require('bcrypt');



const filePath = path.join(__dirname, 'users.json');
function insertUser(fullName, email, password, callback) {
    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) return callback(err);
    
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        

        let users = data ? JSON.parse(data) : [];
        
        let id = users.length > 0 ? users.length + 1 : 1;
        
        let newUser = {id:id,userName:userName, fullName: fullName, email: email, password: hashedPassword,films:[] };

        users.push(newUser);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) return callback(err); 
            callback(null); 
        });

    });
}
function insertMovie(idUser,title,genres,releaseYr,director,image,description,copies,callback){
    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) return callback(err);

        let users = data ? JSON.parse(data) : []; // Parse existing movies
       
        const user = users.find(user => user.id === idUser);

        if (!user) {
            return callback(new Error("User not found"));
        }

        let idFilm = user.films.length > 0 ? user.films.length + 1 : 1;


        let newMovie = {
            id: idFilm++, 
            title: title,
            genres: genres,
            releaseYr:releaseYr,
            director: director, 
            image:image,
            description: description,
            copies: copies
        };

        user.films.push(newMovie); 

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) return callback(err);
            callback(null); 
        });
    });
}


module.exports = {
    insertUser,
    insertMovie
};
