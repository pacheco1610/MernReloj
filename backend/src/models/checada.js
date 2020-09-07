const { Schema, model} = require('mongoose')

const ChecadaSchema = new Schema({
    empleado: String,
    date: {
        type:Date,
    }
},{
    timestamps: true
})

module.exports = model('Checadas', ChecadaSchema)