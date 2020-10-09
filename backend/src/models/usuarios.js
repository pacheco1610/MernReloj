const { Schema, model} = require('mongoose')

const UsuarioSchema  = new Schema({
    username:String,
    password:String,
    numeroEmpleado:String,
    permisos:[],
    photo:String
},{
    timestamps: true
})

module.exports = model('usuarios', UsuarioSchema)