const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008;
app.use(express.static('public'));

const cron = require("node-cron"); //esta libreria de node.js me permite programar tareas que se ejecuten por cuenta propia cada cierta cantidad de tiempo.
cron.schedule('  * * * * *' , require('../src/cron/deleteNotification') // lanza la funcion en  cada minuto
)

//EJS
app.set("view engine", "ejs"); // Setea el template engine
app.set('views', path.join(__dirname, 'views')); // Indica la ubicación de la carpeta views
 
//Middleware integrada en Express
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//METHOD OVERRIDE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//SESSION
const session = require('express-session');
const cookieSession = require('./middlewares/cookieSession');
app.use(session({
    secret: "mundoGamer",
    resave: false,
    saveUninitialized: true
}));
//app.use(cookieSession);

//COOKIE-PARSER
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cookieSession);

/* RUTEO */
let rutasHome = require('./routers/home');
let usersRouter = require('./routers/usersRouter');
let productsRouter = require('./routers/productsRouter');
let adminRouter = require('./routers/adminRouter');
let apiProduct = require('./routers/api/product');
let apiCategory = require('./routers/api/category');
let apiUsers = require('./routers/api/users')
/* HOME ROUTER Y CONTROLLER */
app.use('/', rutasHome);  /* home */

/* USERS ROUTER Y CONTROLLER */
app.use('/users', usersRouter);  /* login, register, myProfile, productCart */

/* PRODUCTS ROUTER Y CONTROLLER */
app.use('/products', productsRouter);  /* categories, productDetail */

/* ADMIN ROUTER Y CONTROLLER */
app.use('/admin', adminRouter);  /* listProduct, productCreate, updateProduct */

/*API*/
app.use('/api/product', apiProduct);
app.use('/api/category', apiCategory)
app.use('/api/users', apiUsers)
/* Error 404 */
app.use((req, res, next) => {
    res.status(404).render('404-page')
})


app.listen(PORT, () => 
console.log(`Servidor levantado en el puerto ${PORT} 
http://localhost:${PORT}`))




