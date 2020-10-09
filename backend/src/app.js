const express = require('express')
const cors = require('cors')
const app = express();



// Settings
app.set('port',4000)

//  Middlewares
app.use(cors())
app.use(express.json())

/*SQL*/

// Routes
app.use('/api/checadas',require('./routes/checada'))
app.use('/api/usuarios',require('./routes/usuarios'))
app.use('/api/menu',require('./routes/menu'))
module.exports = app;
