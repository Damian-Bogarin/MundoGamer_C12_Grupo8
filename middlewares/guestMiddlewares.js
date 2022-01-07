function guestMiddlewares (req,res,next){
    if(req.session.user == undefined){
        next()
    }
    else{
        res.redirect('/users/myProfile')
    }
}



module.exports = guestMiddlewares