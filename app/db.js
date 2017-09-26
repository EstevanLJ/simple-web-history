//Importa a dependência
const sqlite3 = require('sqlite3');

//Conecta com o banco
const db = new sqlite3.Database('./database.sqlite');

module.exports = db;