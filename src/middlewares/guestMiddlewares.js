


//este middleware solo deja pasar si no estas logeado

function guestMiddlewares (req,res,next){
    if(req.session.user == undefined){
        next()
    }
    else{
        res.redirect('/')
    }
}



module.exports = guestMiddlewares