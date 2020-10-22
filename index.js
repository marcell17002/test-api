const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');
const apiRoute =  require('./route');
const bodyParser =  require('body-parser');

const app = express();

app.use(bodyParser.json());

const dbUri = 'mongodb://localhost:27017/mahasiswa';

mongoose.connect(dbUri);
mongoose.connection.on("connected", () => {
    console.log("DB Berhasil Terkoneksi");
});

app.use('/api',apiRoute);

app.listen(3000, ()=>{
    console.log('server running on port 3000')
});