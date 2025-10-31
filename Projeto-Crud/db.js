//arquivo de conexão com o banco de dados
const e = require('express');
const mysql = require('mysql2'); //importar a lib do mysql2

//criar a conexão (credenciais de acesso)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c@tolic@',
    database: 'userdb',
    port: '3306'
});

//estabelecer a conexão
db.connect(err => {
    if (err) throw err; //tratando o erro
    console.log("banco de dados conectado"); //realizar a conexão com sucesso
});

//exportar o módulo de conexão
module.exports = db;
