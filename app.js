const express = require("express")
const app = express()
const PORT = 3000;
const dotenv = require("dotenv")
dotenv.config()
require('./dbconnection').connectdb()
require("./models/index")

app.listen(() => {
    console.log(`server is running on ${PORT}`);
})