const cadastroCarro = [];
const Carro = require('../models/carroModel');

function getCadastroCarro(req, res) {
    res.render("cadastroCarro", { cadastroCarro });
}

function getCarro(req,res){
    Carro.create({
        modelo: req.body.modelo,
        fabricante: req.body.fabricante,
        ano: req.body.ano,
        placa: req.body.placa,
        numero_renavam: req.body.numero_renavam,
        imagem: req.file ? req.file.filename : null 
    }).then(function(){
        console.log("Cadastrado com sucesso");
        res.redirect('/mostrarCarros'); 
    }).catch(function(error){
        console.log("Erro ao cadastrar o carro: "+ error);
    })
}

module.exports = {getCadastroCarro,getCarro};