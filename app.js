const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008; /* en el puerto 3008 porque somos grupo 8 :) */
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html")) /*es la pagina de inicio: home*/
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html")) 
})

/*
productDetail.html
productCart.html
register.html
*/

app.listen(PORT, () => 
console.log(`Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`))
