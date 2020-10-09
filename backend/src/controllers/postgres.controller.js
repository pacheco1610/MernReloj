const posgresql = {}
const { Client } = require('pg')
const connectionData = {
    user: 'alejandro',
    host: '',
    database: 'evaluaciones',
    password: 'mysecretpassword',
    port: 5432,
  }
const client = new Client(connectionData)

posgresql.getUsuarios = async (req,res)=>{ 
  
}



module.exports = posgresql