const ZKLib = require('../node-zklib/zklib')
const axios = require('axios')
const FormatDate = require('./FormatDate')



const test = async (io) => {
    const socket = io
    let zkInstance = new ZKLib('10.0.4.92', 4370, 10000, 4000);
    try {
        // Create socket to machine 
        await zkInstance.createSocket()
    } catch (e) {
        console.log(e)
        if (e.code === 'EADDRINUSE') {
        }
    }
    const updateChecada = async (dataUpdate,data,fecha) =>{
        const objectJson={
            dia:fecha,
            entrada:data.entrada,
            salida:dataUpdate,
            empleado: data.userId,
            tipo:"Correcta"
        }
        await axios.put(`http://localhost:4000/api/checadas/${data.empleado}/${fecha}`, objectJson)
        socket.emit('checada',objectJson)
    }
    const createChecada = async (data,fecha) =>{
        const objectJson={
            dia:fecha,
            entrada:data.attTime,
            salida:"",
            empleado: data.userId,
            tipo:"Correcta"
        }
       await axios.post('http://localhost:4000/api/checadas',objectJson)
       socket.emit('checada',objectJson)
       console.log(objectJson)
    }
    zkInstance.getRealTimeLogs(async (data)=>{
        const fecha = FormatDate(data.attTime)
        const comprobar = await axios.get(`http://localhost:4000/api/checadas/${data.userId}/${fecha}`)
        if (comprobar.data !== null && comprobar.data.salida===null) {
            const res = updateChecada(data.attTime,comprobar.data,fecha)
        }else if(comprobar.data === null){
            createChecada(data,fecha)
        }   
        
        })
}

module.exports = test;