const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008; /* en el puerto 3008 porque somos grupo 8 :) */
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html")) /*es la página de inicio: home*/
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html")) /*página log-in*/
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html")) /*página detalle de producto*/
})

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html")) /*página: carrito de compras*/
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html")) /*página de registro*/
})



app.listen(PORT, () => 
console.log(`Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`))
