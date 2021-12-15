let controller = {

    create: (req, res) => {
        res.render('admin/productCreate')
    },
    update: (req, res) => {
        res.render('admin/updateProduct')
    },
    list: (req, res) => {
        res.render('admin/listProduct')
    }
};



module.exports = controller;