const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require("body-parser")
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const {mongoConnect} = require('./services/mongo');
async function startServer (){
    await mongoConnect();
    app.listen(1000,()=>{
        console.log('server started');
    })
}
startServer();