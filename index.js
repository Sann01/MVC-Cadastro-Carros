//dotenv config
require('dotenv').config()


//variables
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
const multer = require('multer');
const app = express();
const path = require('path');
const port = process.env.DB_PORT;
const bodyParser = require('body-parser');
const upload = multer({dest:"./public/uploads"});


//controllers
const cadastroCarroController = require("./controller/cadastroCarroController");
const cadastroController = require("./controller/cadastroController");
const loginController = require("./controller/loginController");
const homeController = require("./controller/homeController");


// models
const Carro = require('./models/carroModel');
const usuario = express.Router();


//sets & uses
app.set('view engine', 'ejs');
app.set('layout', './layouts/default/index');
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(session({secret:'MVCcadastrocarro'}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/usuarios', usuario);


//listen
app.listen(port,()=>{
    console.log("Server running on: https://localhost:" + port);
});


// gets & posts
app.get('/', (req, res) => {
    res.redirect('/register'); 
});

app.get('/register',(req,res)=>{
    app.set('layout','./layouts/default/register');
    cadastroController.getCadastroUsuario(req,res);
})
app.post('/register', (req, res) => {
    cadastroController.cadastrar(req,res);
    res.redirect('/login');
});

app.get('/login',(req,res)=>{
    app.set('layout','./layouts/default/login');
    loginController.getLogin(req,res);
})
app.post('/login', (req, res) => {
    cadastroController.cadastrar(req,res);
});

app.get('/home',(req,res)=>{
    app.set('layout','./layouts/default/home');
    homeController.getHome(req,res);
})
app.post('/home', (req, res) => {
    loginController.logar(req,res);
});

app.get('/cadastroCarro', (req, res) => {
    app.set('layout','./layouts/default/cadastroCarro');
    cadastroCarroController.getCadastroCarro(req,res);
});
app.get('/mostrarCarros', function (req,res){
    Carro.findAll().then(function(carros){
        app.set('layout', './layouts/default/mostrarCarros');
        res.render('layouts/default/mostrarCarros', {carros:carros});
    });
});
app.post('/enviarCarro',upload.single("imagem"), function (req,res){
    cadastroCarroController.getCarro(req,res);
});

app.get('/deletar/:id',(req,res)=>{
    Carro.destroy({where:{'id':req.params.id}}).then(function(){
        res.redirect("/mostrarCarros");
    }).catch(function(err){
        res.send("Este carro não existe!" + err)
    })
})
app.get('/editar/:id',(req,res)=>{
    Carro.findOne({where:{'id':req.params.id}}).then((carros)=>{

    }).catch((err)=>{
        console.log("Erro ao carregar o formulario de edicao"+err);
        res.redirect('/mostrarCarros');
    })
    res.redirect('/layouts/default/editarInformacao');
})



