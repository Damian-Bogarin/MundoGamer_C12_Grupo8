
// este middleware solo deja pasar si un cliente esta logeado


function userLogMiddlewares (req,res,next){
    if(req.session.user){
        console.log('paso por aqui')
        next()
    }
    else{
        res.redirect('/users/login')
    }
}



module.exports = userLogMiddlewares