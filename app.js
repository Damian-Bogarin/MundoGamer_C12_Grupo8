const express = require('express');
const app = express();
let path = require('path')
app.get("/home",(req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
    })
app.get("/categoria",(req,res) => {
    res.sendFile(path.join(__dirname, '/views/categorias.html'))
     })
app.use(express.static('design'));

app.listen(3030, () => console.log("Servidor Levantado"))

