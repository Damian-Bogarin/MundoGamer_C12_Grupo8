// Requiero las herramientas a usar
let { validationResult } = require('express-validator')
const fs = require('fs')
const db = require('../database/models');
const path = require('path')

// Llamo a los modelos
const Products = db.Product;
const CompatibilityProduct = db.CompatibilityProduct
const LanguageProduct = db.LanguageProduct
const MultiplayerProduct = db.MultiplayerProduct
const SubtitleProduct = db.SubtitleProduct
const UserPreferences = db.UserPreferences
const controller = {

    detail: (req, res) => {
        Products.findByPk(req.params.id, { //Encuento el articulo a traves de su Prumary key e incluyo las asociasiones
            include: [{ association: 'gender' },
            { association: 'clasification' },
            { association: 'compatibility' },
            { association: 'language' },
            { association: 'subtitle' },
            { association: 'multiplayer' }
            ]
        })
            .then((producto) => {
                res.render('products/productDetail', { producto: producto, session: req.session })
            })

    },


    store: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, price, descount, stock, clasification, stars, language, subtitle, gender, description, multiplayer, integratedShopping, console, conexion } = req.body


            let conexiontrue = +conexion
            let date = new Date
            let priceEndtrue = price * ((100 - descount) / 100);
            let gendertrue = +gender;
            let clasificationtrue = +clasification
            let integratedShop = +integratedShopping

            Products.create({
                name,
                description,
                date: date,
                conexion: conexiontrue, // Verificar si da un 0 o 1
                integratedShop: integratedShop,
                price,
                descount,
                priceEnd: priceEndtrue,
                sold: 0,
                stock,
                genderId: gendertrue,
                classificationId: clasificationtrue,
                photo: req.file ? req.file.filename : 'default-image.png',
            })
                .then((productCreate) => {
                    for (let i = 0; i < console.length; i++) {
                        CompatibilityProduct.create({
                            compatibilityId: +console[i],
                            productId: productCreate.id
                        });

                    }
                    for (let i = 0; i < language.length; i++) {
                        LanguageProduct.create({
                            languageId: +language[i],
                            productId: productCreate.id
                        });

                    }
                    for (let i = 0; i < multiplayer.length; i++) {
                        MultiplayerProduct.create({
                            multiplayerId: +multiplayer[i],
                            productId: productCreate.id
                        });

                    }
                    if (subtitle || subtitle != null || subtitle != undefined) {
                        for (let i = 0; i < subtitle.length; i++) {
                            SubtitleProduct.create({
                                subtitleId: +subtitle[i],
                                productId: productCreate.id
                            });

                        }
                    }

                })

                /* .catch(error => console.log(error)) */

                .then((result) => {
                    res.redirect("/admin")
                })

        } else {
            console.log(errors)
            console.log(errors.mapped())
            console.log(req.body)
            res.render('admin/productCreate', {

                old: req.body,

                errors: errors.mapped()
            })



        }

    },
    update: (req, res) => {

        let errors = validationResult(req);
        // res.send(req.body)
        const { name, price, descount, stock, clasification, stars, language, subtitle, gender, description, multiplayer, integratedShopping, console, conexion } = req.body


        if (errors.isEmpty()) {
            let conexiontrue = +conexion
            let date = new Date
            let priceEndtrue = price * ((100 - descount) / 100);

            let gendertrue = +gender;
            let clasificationtrue = +clasification
            let integratedShop = +integratedShopping
            if (req.file) {
                Products.findByPk(req.params.id)
                    .then((item) => {
                        fs.unlink(path.join(__dirname + '../../../public/img/products/' + item.photo), (error) => {
                            if (error) { console.error(error) }
                        })

                    })
                    .then(Products.update({
                        photo: req.file.filename
                    },
                        {
                            where: { id: req.params.id }
                        }))

            }
            Products.update({
                name,
                description,
                conexion: conexiontrue,
                integratedShop: integratedShop,
                price,
                descount,
                priceEnd: priceEndtrue,
                stock,
                genderId: gendertrue,
                classificationId: clasificationtrue,

            },
                {
                    where: { id: req.params.id }
                })
                .then((productEdit) => {
                    // BORRO TODAS LAS ASOCIACIONES
                    CompatibilityProduct.destroy({
                        where: {
                            productId: req.params.id
                        }
                    })
                    LanguageProduct.destroy({
                        where: {
                            productId: req.params.id
                        }
                    })
                    MultiplayerProduct.destroy({
                        where: {
                            productId: req.params.id
                        }
                    })
                    SubtitleProduct.destroy({
                        where: {
                            productId: req.params.id
                        }
                    })
                    //Vuelvo a crear las asociaciones
                    for (let i = 0; i < console.length; i++) {
                        CompatibilityProduct.create({
                            compatibilityId: +console[i],
                            productId: req.params.id
                        });

                    }
                    for (let i = 0; i < language.length; i++) {
                        LanguageProduct.create({
                            languageId: +language[i],
                            productId: req.params.id
                        });

                    }
                    for (let i = 0; i < multiplayer.length; i++) {
                        MultiplayerProduct.create({
                            multiplayerId: +multiplayer[i],
                            productId: req.params.id
                        });

                    }
                    if (subtitle) { //evaluar
                        for (let i = 0; i < subtitle.length; i++) {
                            SubtitleProduct.create({
                                subtitleId: +subtitle[i],
                                productId: req.params.id
                            });

                        }
                    }




                }).then((result) => {
                    res.redirect("/admin")
                })


        } else {

            Products.findByPk(req.params.id, {
                include: [{ association: 'gender' },
                { association: 'clasification' },
                { association: 'compatibility' },
                { association: 'language' },
                { association: 'subtitle' },
                { association: 'multiplayer' }
                ]




            })
                .then((productsToUpdate) => {
                    //res.send(productsToUpdate)
                    res.render('admin/updateProduct', {
                        old: productsToUpdate,
                        errors: errors.mapped()
                    })
                })

        }

    }


    ,

    delete: (req, res) => {

        let productDestroy =
            [
                CompatibilityProduct.destroy({
                    where: {
                        productId: req.params.id
                    }
                }),
                LanguageProduct.destroy({
                    where: {
                        productId: req.params.id
                    }
                }),
                MultiplayerProduct.destroy({
                    where: {
                        productId: req.params.id
                    }
                }),
                SubtitleProduct.destroy({
                    where: {
                        productId: req.params.id
                    }
                }),
                UserPreferences.destroy({
                    where: {
                        productId: req.params.id
                    }
                })

            ]
        Products.findByPk(req.params.id)
            .then((item) => {
                fs.unlink(path.join(__dirname + '../../../public/img/products/' + item.photo), (error) => {
                    if (error) { console.error(error) }
                    console.log('Archivo Borrado')
                })

            })

        Promise.all(productDestroy).then((result) => {
            Products.destroy({
                where: { id: req.params.id }
            }).then((result) => {
                res.redirect('/admin')
            })
        })







    },

    category: (req, res) => {
        res.render('products/category', {
            session: req.session
        })
    }
}




module.exports = controller;