const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008; /* en el puerto 3008 porque somos grupo 8 :) */
app.use(express.static('public'));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
    })
app.get("/categorias",(req,res) => {
    res.sendFile(path.join(__dirname, '/views/categorias.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html")) 
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html")) 
})

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html")) 
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html")) 
})



app.listen(PORT, () => 
console.log(`Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`))