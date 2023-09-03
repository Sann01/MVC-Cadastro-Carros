const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
//controllers
const cadastroCarroController = require("./src/controller/cadastroCarroController");
const cadastroController = require("./src/controller/cadastroController");
const loginController = require("./src/controller/loginController");
const homeController = require("./src/controller/homeController");
// models
const addUser = require('./src/models/usuarioModel');
const Carro = require("./src/models/carroModel");

const app = express();
const port = 7000;
const bodyParser = require('body-parser');
var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(session({secret:'MVCcadastrocarro'}))
app.use(bodyParser.urlencoded({extended:true}));
app.set('layouts', './layouts/default/index');

app.listen(port,()=>{
    console.log("Server running on: https://localhost:" + port);
});
// gets
app.get('/', (req, res) => {
    res.redirect('/cadastro'); 
});

app.get('/cadastro',(req,res)=>{
    app.set('layout','./layouts/default/cadastro');
    cadastroController.getCadastroUsuario(req,res);
})
app.post('/cadastro', async (req, res) => {
    cadastroController.cadastro(req, res);
});


app.get('/cadastroCarro', (req, res) => {
    app.set('layout','./layouts/default/cadastroCarro');
    cadastroCarroController.getCadastroCarro(req,res);
});

app.get('/login',(req,res)=>{
    app.set('layout','./layouts/default/login');
    loginController.getLogin(req,res);
})
app.post('/login', (req, res) => {
    usuarioController.getLogin(req,res);
});

app.get('/home',(req,res)=>{
    app.set('layout','./layouts/default/home');
    homeController(req,res);
})
app.post('/home', (req, res) => {
    app.set('layout','./layouts/default/home');
    homeController.getHome(req,res);
});
app.post('/enviarCarro', function (req,res){
    Carro.create({
        modelo: req.body.modelo,
        fabricante: req.body.fabricante,
        ano: req.body.ano,
        placa: req.body.placa,
        numero_renavam: req.body.numero_renavam,
        imagem: req.body.imagem
    }).then(function(){
        res.redirect('/mostrarCarros'); 
    }).catch(function(error){
        res.send("Erro ao cadastrar o carro: "+ error);
    })
});

app.get('/deletar/:id',(req,res)=>{
    Carro.destroy({where:{'id':req.params.id}}).then(function(){
        res.send("Carro deletado!")
        res.redirect('./layouts/default/mostrarCarros')
    }).catch(function(erro){
        res.send("Este carro nao existe!")
    })
    loginController.getLogin(req,res);
})

app.get('/mostrarCarros', function (req,res){
    Carro.findAll().then(function(carros){
        app.set('layout', './layouts/default/mostrarCarros');
        res.render('layouts/default/mostrarCarros', {carros:carros});
    });
});
