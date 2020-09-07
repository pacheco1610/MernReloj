const ZKLib = require('../node-zklib/zklib')
const axios = require('axios')
const test = async (io) => {
    let zkInstance = new ZKLib('10.0.4.92', 4370, 10000, 4000);
    try {
        // Create socket to machine 
        await zkInstance.createSocket()
        io.emit('checada','chango')
    } catch (e) {
        console.log(e)
        if (e.code === 'EADDRINUSE') {
        }
    }
    zkInstance.getRealTimeLogs(async (data)=>{
        // do something when some checkin 
        await axios.post('http://localhost:4000/api/checada', {
            empleado: data.userId,
            date:data.attTime
            })
            console.log(data)
        })
}

module.exports = test;