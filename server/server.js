const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user");
const cors = require("cors");

dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Conectado a base de dados");
  }
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const produtoRouter = require('./router/produto');
const categoriaRouter = require('./router/categoria');
const proprietarioRouter = require('./router/proprietario');
const userRouter = require('./router/auth');
const avaliacaoRouter = require('./router/avaliacao');
const enderecoRouter = require('./router/endereco');

app.use('/api', produtoRouter);
app.use('/api', categoriaRouter);
app.use('/api', proprietarioRouter);
app.use('/api', userRouter);
app.use('/api', avaliacaoRouter);
app.use('/api', enderecoRouter);

//app.get("/", (req, res) => {
//  res.json("Teste de backend");
//});

//app.post("/", (req, res) => {
//  let user = new User();
//  user.nome = req.body.nome;
//  user.email = req.body.email;
//  user.senha = req.body.senha;
//  user.save((error) => {
//    if (error) {
//      res.json(error);
//    } else {
//      res.json("Salvo com sucesso");
//    }
//  });
//});

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Escutando na porta 3000");
  }
});
