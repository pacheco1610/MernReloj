const mongoose = require('mongoose')

const URI = 'mongodb://10.0.0.55:27017/Badeba?authSource=admin'

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false,
    user: 'desarrollo', 
    pass: 'DesarrolloBadeBa2020'
})

const connection = mongoose.connection

connection.once('open', ( ) => {
    console.log('Mongo esta conectado correctamente')
})
