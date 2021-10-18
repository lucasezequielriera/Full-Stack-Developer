// Lógica //

const usersModel = require("../models/usersModel")
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

module.exports = {
    create: async function(req, res, next) {
        // Insertar en base de datos //
        try {
            const user = new usersModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            
            const document = await user.save()
            res.json(document)
        } catch(e) {
            next(e)
        }
    },
    login: async function(req, res, next) {
        try {

        } catch(e) {
            next(e)
        }
    }
}