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

// async function carroDelete(req, res) {
//     const carroID = req.params.id;
//     try {
//         const deleted = await Pet.excluirPet(id_pet);
//         if (deleted) {
//             res.redirect("/pets");
//         } else {
//             res.status(404).send('Pet não encontrado.');
//         }
//     } catch (error) {
//         console.log('Erro ao excluir o pet:', error);
//         res.status(500).send('Erro ao excluir o pet.');
//     }
// }


module.exports = {getCadastroCarro,getCarro};