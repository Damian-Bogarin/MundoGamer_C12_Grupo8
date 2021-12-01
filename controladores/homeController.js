const controller = {

    home : (req,res) => {
        res.render('home')} ,
    categorias: (req,res) => {
        res.render('products/categorias')}
    

}



module.exports = controller;