const app = require('./app')
require('./database')
const test = require('./zklib')
const SocketIO = require('socket.io')


const server = app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})

 


const io = SocketIO.listen(server)

io.on('connection',(socket)=>{
    //console.log('Usuario Conectado')

})

test(io)
