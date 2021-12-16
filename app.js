const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008;
app.use(express.static('public'));

//EJS
app.set("view engine", "ejs") // Setea el template engine
app.set('views', path.join(__dirname, 'views')) // Indica la ubicación de la carpeta views
 
//Middleware integrada en Express
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//METHOD OVERRIDE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/* RUTEO */
let rutasHome = require('./routers/home');
let usersRouter = require('./routers/usersRouter');
let productsRouter = require('./routers/productsRouter');
let adminRouter = require('./routers/adminRouter');

/* HOME ROUTER Y CONTROLLER */
app.use('/', rutasHome);

/* USERS ROUTER Y CONTROLLER */
app.use('/users', usersRouter);  /* login */

/* PRODUCTS ROUTER Y CONTROLLER */
app.use('/products', productsRouter); /* cart */

/* ADMIN ROUTER Y CONTROLLER */
app.use('/admin', adminRouter);  /* productCreate */







app.listen(PORT, () => 
console.log(`Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`))