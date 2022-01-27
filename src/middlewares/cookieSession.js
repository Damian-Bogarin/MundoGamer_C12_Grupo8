/* un if si pregunta si existe la cookie */
function cookieSession (req, res, next) {
    if(req.cookies.mundoGamer){
       req.session.user = req.cookies.mundoGamer; //al poner recordar guardamos todos los datos de session en la cookie
       res.locals.user = req.session.user
    }
    next()
}



module.exports = cookieSession; 