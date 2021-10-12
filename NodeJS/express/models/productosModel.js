// Interacción con la base de datos //

const mongoose = require("../bin/mongodb")

const productosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: String,
    description: String,
    price: Number,
    quantity: Number
})

module.exports = mongoose.model("productos", productosSchema)