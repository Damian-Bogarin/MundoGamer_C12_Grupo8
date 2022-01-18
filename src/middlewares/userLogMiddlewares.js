function userLogMiddlewares (req,res,next){
    if(req.session.user != undefined && req.session.user.rol === "client"){
        next()
    }
    else{
        res.redirect('/users/login')
    }
}



module.exports = userLogMiddlewares