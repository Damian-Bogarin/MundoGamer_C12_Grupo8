
// ESTE MIDDLEWARE  SOLO DEJA PASAR SI TENES ROL ADMIN

function adminLogMiddlewares (req,res,next){
    if(req.session.user != undefined && req.session.user.rol === "admin"){
        next()
    }
    else{
        res.redirect('/')
    }
}



module.exports = adminLogMiddlewares