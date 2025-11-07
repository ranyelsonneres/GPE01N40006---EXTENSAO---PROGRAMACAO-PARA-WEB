//incluir as rotas do meu sistema
//CADASTRAR; LER; EXLCUIR; EDITAR

//importar o express (framework)
const express = require('express');
const router = express.Router(); //modularizar as rotas

//instanciar a conexão com o banco de dados
const db = require('../db');

//definir as rotas
//CADASTRAR (INSERT)
//TIPO DE ROTA: (POST): /api/users/
router.post('/', (req, res)=>{
    //passar os campos que vem do front (JSON)
    const {nome, email} = req.body; //corpo da requisição
    console.log(nome);
    //executar a instrução SQL
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email],
        (err, result) =>{
            if (err) return res.status(500).send(err);
            res.status(201).json({id: result.insertId, nome, email});
        }
    );
})

//exportar o módulo de rotas (API)
module.exports = router;
