const cadastroCarro = [];
const carroModel = require('../models/carroModel');

function getCadastroCarro(req, res) {
    res.render("cadastroCarro", { cadastroCarro });
}

async function getCarro(req,res,next) {
    const carros = await carroModel.findAll();
    res.render("cadastroCarro",{carros});
}

async function deleteCarro(req,res){
    const data = req.body;
    console.log(data)
    console.log("testDlete")

    await carroModel.destroy({where:{modelo:modelo}})
    .then(result=>{
        res.redirect("listar")
    }).catch(erro =>{
        
    })
}


module.exports = {getCadastroCarro,getCarro,deleteCarro};