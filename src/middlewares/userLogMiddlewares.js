
// este middleware solo deja pasar si un cliente esta logeado


function userLogMiddlewares (req,res,next){
<<<<<<< HEAD
    if(req.session.user){
        console.log('paso por aqui')
=======
    if(req.session.user != undefined ){
>>>>>>> Damian
        next()
    }
    else{
        res.redirect('/users/login')
    }
}



module.exports = userLogMiddlewares