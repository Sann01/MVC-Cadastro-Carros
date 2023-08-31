const express = require("express");
const expressLayouts = require("express-ejs-layouts");
//controllers
const homeController = require("./controller/homeController");

// models
const carroModel = require("./models/carroModel");
const usuarioModel = require("./models/usuarioModel");


const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

app.set('layouts', './layouts/default/index');

app.listen(port,()=>{
    console.log("Server running on: https://localhost:" + port);
});

app.get('/', (req, res) => {
    res.redirect('/home'); 
});

app.get('/home', (req, res) => {
    app.set('layout','./layouts/default/home');
    homeController.getHome(req,res);
});





// app.set('layout', './layouts/default/index');


// app.get('/login', (req, res) => {
// app.set("layout", "./layouts/default/login");
// usuarioController.getLogin(req, res);
// });
// app.use((req, res, next)=>{
//     if(!req.session.user){
//         if(req.originalUrl);
// }
// })
// app.get("/", (req,res)=>{
//     app.set("layout", "./layouts/default/welcome")
//     res.render("welcome");
// });
// app.get("/cadastro", (req,res)=>{
//     res.render("/");
// });



// (async () => {

//     const database = require('./model/db');
//     const Produto = require('./model/produtoModel');
//     await database.sync();

    // const novoProduto = await Produto.create({
    //     placa:' ',
    //     ano:'',
    //     modelo:'',
    //     fabricante:'',
    //     numero_renavam:'',
    //     imagem:''
    // });     

    // console.log(novoProduto);
    //     const produtos = await Produto.findByPk(`${id}`);
    //     console.log(produtos);
    //     await produto.save();

    //     await produto.destroy(`${id}`);

// })();
