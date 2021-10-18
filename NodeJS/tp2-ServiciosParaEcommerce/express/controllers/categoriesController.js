// Lógica //

const productosModel = require("../models/categoriesModel")

module.exports = {
    getAll: async function(req, res, next) {
        try {
            const productos = await productosModel.find()
            res.json(productos)
        } catch(e) {
            next(e)
        }
    },
    create: async function(req, res, next) {
        // Insertar en base de datos //
        try {
            console.log(req.body); // Recibir lo enviado en el body del request //
            const document = new productosModel({
                name: req.body.name
            })
            
            const response = await document.save()
            res.json(response)
        } catch(e) {
            next(e)
        }
    }
}