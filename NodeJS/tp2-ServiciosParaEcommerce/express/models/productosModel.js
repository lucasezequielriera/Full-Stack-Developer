// Interacción con la base de datos //

const mongoose = require("../bin/mongodb")
const errorMessage = require("../util/errorMessage")

const productosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        minlength: [3, errorMessage.GENERAL.minlength]
    },
    sku: {
        type: String,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        minlength: [3, errorMessage.GENERAL.minlength]
    },
    description: {
        type: String,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        minlength: [3, errorMessage.GENERAL.minlength]
    },
    price: {
        type: Number,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        min: 1,
        get: function(value) {
            // Agarra el valor y devuelve lo que quiero sin modificar el dato en la base de datos, lo ve modificado el que lo consume //
            return value * 99
        }
        // set: function(value) {
        //     // Agarra el valor y lo almacena modificado en la base //
        //     return value * 100
        // }
    },
    quantity: {
        type: Number,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        min: 1
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
})

// Crea y devuelve un nuevo objeto al momento de hacer la consulta //
productosSchema.virtual("price_currency").get(function() {
    return "$" + this.price
})

// Usar .get, .set y .virtual //
productosSchema.set("toJSON", { getters: true, setters: true, virtuals: true })

productosSchema.plugin(mongoose.mongoosePaginate)

module.exports = mongoose.model("productos", productosSchema)