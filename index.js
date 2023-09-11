const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
const multer = require('multer');
const app = express();
const path = require('path');
const port = 7000;
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


app.listen(port,()=>{
    console.log("Server running on: https://localhost:" + port);
});
// gets
app.get('/', (req, res) => {
    res.redirect('/register'); 
});

app.get('/register',(req,res)=>{
    app.set('layout','./layouts/default/register');
    cadastroController.getCadastroUsuario(req,res);
})
app.post('/register', (req, res) => {
    
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
    res.render("layouts/default/login");
});

app.get('/home',(req,res)=>{
    app.set('layout','./layouts/default/home');
    homeController.getHome(req,res);
})
app.post('/home', (req, res) => {
    app.set('layout','./layouts/default/home');
    homeController.getHome(req,res);
});
app.post('/enviarCarro',upload.single("imagem"), function (req,res){
    cadastroCarroController.getCarro(req,res);
});

app.get('/deletar/:id',(req,res)=>{
    Carro.destroy({where:{'id':req.params.id}}).then(function(){
        res.send("Carro deletado!")
        res.redirect('./layouts/default/mostrarCarros')
    }).catch(function(erro){
        res.send("Este carro não existe!")
    })
    loginController.getLogin(req,res);
})

app.get('/mostrarCarros', function (req,res){
    Carro.findAll().then(function(carros){
        app.set('layout', './layouts/default/mostrarCarros');
        res.render('layouts/default/mostrarCarros', {carros:carros});
    });
});
