const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const USER_DB = process.env.USER_DB
const PASS_DB = process.env.PASS_DB

mongoose.connect(`mongodb+srv://${USER_DB}:${PASS_DB}@cluster0.91afl.mongodb.net/?retryWrites=true&w=majority`, () => console.log('Conexão com o db feita com sucesso!'))

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(3000, () => console.log('app rodando na porta 3000'));