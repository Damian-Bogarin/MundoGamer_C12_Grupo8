const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008;
app.use(express.static('public'));
//EJS
app.set("view engine", "ejs") // Setea el template engine
app.set('views', path.join(__dirname, 'views'))   // Indica la ubicación de la carpeta views
 

//POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//PUT - DELETE
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

/* RUTEO */
/* let rutasCategorias = require('./routes/categorias.js') */
let rutasProductos = require('./routes/productos.js')
let rutasHome = require('./routes/home.js')
let rutasLogin = require('./routes/login.js')
let rutasRegister = require('./routes/register.js')


/* app.use('/categorias', rutasCategorias) */
app.use('/productos', rutasProductos)
app.use('/', rutasHome)
app.use('/login', rutasLogin)
app.use('/register', rutasRegister)






app.listen(PORT, () => 
console.log(`Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`))