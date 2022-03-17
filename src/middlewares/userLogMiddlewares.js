
// este middleware solo deja pasar si un cliente esta logeado

function userLogMiddlewares (req,res,next){
    if(req.session.user != undefined ){
        next()
    }
    else{
        res.redirect('/users/login')
    }
}



module.exports = userLogMiddlewares