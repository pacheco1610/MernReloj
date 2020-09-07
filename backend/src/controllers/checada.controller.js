const checada = {}
const ChecadaModels = require('../models/checada')

checada.getChecada = async (req,res)=>{ 
    const Checadas = await ChecadaModels.find()
    res.json(Checadas)
}
checada.createChecada = async (req,res)=>{ 
    const {empleado, date} =req.body
    const newChecadas = new ChecadaModels({
        empleado:empleado,
        date:date,
    })
    await newChecadas.save()
    res.json({message:'Checada Guardada'})
}



module.exports = checada