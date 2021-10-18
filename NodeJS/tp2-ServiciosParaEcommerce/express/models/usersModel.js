// Interacción con la base de datos //

const mongoose = require("../bin/mongodb")
const errorMessage = require("../util/errorMessage")
const validators = require("../util/validators")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, errorMessage.GENERAL.campo_obligatorio]
    },
    email: {
        type: String,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        unique: true,
    },
    password: {
        type: String,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        validate: {
            validator: function(value) {
                return validators.isGoodPassword(value)
            },
            message: errorMessage.USERS.passwordIncorrect
        }
    }
})

module.exports = mongoose.model("users", userSchema)