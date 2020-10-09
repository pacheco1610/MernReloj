const { Schema, model} = require('mongoose')

const MenuSchema  = new Schema({
   ruta:String,
   icono:String,
   titulo:String,
   submenu:[]
})

module.exports = model('menu', MenuSchema)