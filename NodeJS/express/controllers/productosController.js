// Lógica //

const productosModel = require("../models/productosModel")

module.exports = {
    getAll: async function(req, res, next) {
        try {
            const productos = await productosModel.find()
            res.json(productos)
        } catch(e) {
            res.json({ "error": true, "message": e.message })
        }
    },
    getById: async function(req, res, next) {
        try {
            const producto = await productosModel.findById(req.params.id)
            res.json(producto)
        } catch (e) {
            res.json({ "error": true, "message": e.message })
        }
    },
    create: async function(req, res, next) {
        // Insertar en base de datos //
        try {
            console.log(req.body); //Recibir lo enviado en el body del request //
            const producto = new productosModel({
                name: req.body.name,
                sku: req.body.sku,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity
            })
            
            const documento = await producto.save()
            res.json(documento)
        } catch(e) {
            res.json({ "error": true, "message": e.message })
        }
    },
    update: async function(req, res, next) {
        // Insertar en la base de datos //
        console.log(req.params.id); // Parametros por url //
        console.log(req.body); // Recibir lo enviado en el bod del request //
        try {
            const producto = await productosModel.updateOne({_id: req.params.id}, req.body)
            res.json(producto)
        } catch(e) {
            res.json({ "error": true, "message": e.message })
        }
    },
    delete: async function(req, res, next) {
        try {
            console.log(req.params.id); // Parametros por url //
            res.json(req.body);
        } catch(e) {
            res.json({ "error": true, "message": e.message })
        }
    }
}