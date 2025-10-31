//arquivo principal do servidor
const express = require('express'); //importando o framework
const app = express(); //criar a instância - utilizar o framework
const port = 3000; //porta do servidor web

//instanciar o caminho dos arquivos estáticos (front-end)
const path = require('path');
app.use(express.static('public'));

//chamar a conexão com o banco
const db = require('./db');

//rota padrão do nosso servidor web
app.get('/', (req, res) =>{
    //res.send("Front funcionando!!!");
    res.sendFile(path.join(__dirname, 'public', 'index.html')); //arquivo estático
});

//vincular o nosso servidor em uma porta
app.listen(port, ()=>{
    console.log("servidor web funcionando - backend");
});
