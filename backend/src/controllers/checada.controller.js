const checada = {}
const ChecadaModels = require('../models/checada')


checada.getChecadas = async (req,res)=>{ 
    const Checadas = await ChecadaModels.find()
    res.json(Checadas)
}
checada.getChecada = async (req,res)=> {
    const checada = await ChecadaModels.findOne({empleado:req.params.id,dia:req.params.dia})
    res.json(checada)    
}
checada.updateChecada = async (req,res)=>{
    await ChecadaModels.findOneAndUpdate({empleado:req.params.id,dia:req.params.dia},req.body)
    res.json({messasage: 'checada Actualizada'})
}
checada.createChecada = async (req,res)=>{ 
    const {empleado, dia,salida,entrada,tipo}=req.body
    const newChecadas = new ChecadaModels({
        dia:dia,
        entrada:entrada,
        salida:salida,
        empleado: empleado,
        tipo:tipo
    })
    await newChecadas.save()
    res.json({message:'Checada Guardada'})
}



module.exports = checada