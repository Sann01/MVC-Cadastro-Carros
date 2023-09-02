const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require('express-session');
//controllers
const cadastroCarroController = require("./controller/cadastroCarroController");
const cadastroController = require("./controller/cadastroController");
const loginController = require("./controller/loginController");
const homeController = require("./controller/homeController");
const listarController = require("./controller/listarController");
// models
const addUser = require('./models/usuarioModel');

const app = express();
const port = 7000;
const bodyParser = require('body-parser');
var path = require('path');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(session({secret:'cadastrocarro'}))
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

app.get('/cadastroCarro', (req, res) => {
    app.set('layout','./layouts/default/cadastroCarro');
    cadastroCarroController.getCadastroCarro(req,res);
});

app.get('/login',(req,res)=>{
    app.set('layout','./layouts/default/login');
    loginController.getLogin(req,res);
})

app.get('/home',(req,res)=>{
    app.set('layout','./layouts/default/home');
    homeController.getHome(req,res);
})


app.get('/listarCarro',(req,res)=>{
    app.set('layout','./layouts/default/listar');
    listarController.getListarCarro(req,res);
    Carro.all({order:[['id','']]}).then(function(carros){
        res.render("listar",{carros:carros});
    })
})

app.get('/deletar/:id',(req,res)=>{
    Carro.destroy({where:{'id':req.params.id}}).then(function(){
        res.send("Carro deletado!")
        res.redirect('./layouts/default/listar')
    }).catch(function(erro){
        res.send("Este carro nao existe!")
    })
    loginController.getLogin(req,res);
})

app.post('/cadastro', async (req, res) => {
    cadastroController.cadastro(req, res);
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;


    if (email === 'usuario' && senha === 'senha') {
        res.send('Login bem-sucedido');
    } else {
        res.send('Login falhou');
    }
});