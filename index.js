const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');

const USER_DB = process.env.USER_DB
const PASS_DB = process.env.PASS_DB

mongoose.connect(`mongodb+srv://${USER_DB}:${PASS_DB}@cluster0.91afl.mongodb.net/?retryWrites=true&w=majority`, () => console.log('connected to db!'))

app.use(express.json());

app.use('/api/user', authRoute);

app.listen(3000, () => console.log('app is running on port 3000'));