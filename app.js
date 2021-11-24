const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008; /* en el puerto 3008 porque somos grupo 8 :) */
app.use(express.static('public'));


app.get("/",(req,res) => {
        res.render('home')
        })
app.get("/categorias",(req,res) => {
    res.render('categorias')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/productDetail', (req, res) => {
    res.render('productDetail')
})

app.get('/productCart', (req, res) => {
    res.render('productCart') 
})

app.get('/register', (req, res) => {
    res.render('register') 
})


app.set('view engine' , 'ejs')



app.listen(PORT, () => 
console.log(`Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`))