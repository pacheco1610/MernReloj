const { Schema, model} = require('mongoose')

const ChecadaSchema = new Schema({
    dia:String,
    entrada:{
        type:Date,
    },
    salida:{
        type:Date,
        default:""
    },
    empleado: String,
    tipo:String
},{
    timestamps: true
})

module.exports = model('Checadas', ChecadaSchema)