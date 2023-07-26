const mongoose = require('mongoose')

const userSchemas = new mongoose.Schema(
    {
        name:{
            type: String
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String,
            unique: true,
            required: true
        },
        role:{
            type: String
        }
    }
)

module.exports = mongoose.model('usuarios', userSchemas)