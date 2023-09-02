const cadastroCarro = [];
const carroModel = require("../models/carroModel");
let msg = "";

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

    await carroModel.destroy({where:{nome:nome}})
    .then(result=>{
        res.redirect("listar")
    }).catch(erro =>{
        
    })
}

async function addCarro(req,res){
    const data = req.body;

    if(modelo == " " || fabricante == " " || ano == " " || placa == " " || numeroRenavam == " " ){
        msg = " faz tudo po, coloca os valores";
        res.render("cadastroCarro", {msg});
    }else{
        console.log(data);
        await carroModel.create(data)
        .then(()=>{
            msg = "deu certo"
            res.render("cadastroCarro", {msg})
        }).catch((erro)=>{
            if(erro){
                msg = "erro ao add filme";
                res.render("cadastroCarro",{msg});
            }
        })
    }
}

module.exports = {getCadastroCarro,getCarro,deleteCarro,addCarro};