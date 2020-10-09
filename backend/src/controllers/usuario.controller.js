const usuarios = {}
const UsuarioModels = require('../models/usuarios')


usuarios.getUsuarios = async (req,res)=>{ 
    const Usuarios = await UsuarioModels.find()
    res.json(Usuarios)
}
usuarios.createUsuario = async (req,res)=>{ 
    const {username, password,numeroEmpleado,permisos,photo}=req.body
    const newUSUARIO = new UsuarioModels({
        username:username,
        password:password,
        numeroEmpleado:numeroEmpleado,
        permisos: permisos,
        photo:photo
    })
    await newUSUARIO.save()
    res.json({message:'Correcto'})
}



module.exports = usuarios