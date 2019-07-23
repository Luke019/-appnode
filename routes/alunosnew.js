var express = require('express');
var router = express.Router();

router.get('/', function(req, res, nect){
    res.render('alunosnew', {title: 'Novo Aluno', alunos: {} });
})

router.post('/', function(req, res, next){
    
})

module.exports = router;
