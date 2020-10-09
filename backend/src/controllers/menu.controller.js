const menu = {}
const MenuSchema = require('../models/menu')


menu.getMenu = async (req,res)=>{ 
    const Menu= await MenuSchema.find()
    res.json(Menu)
}
menu.createMenu = async (req,res)=>{ 
    const {ruta,icono,titulo,submenu}=req.body
    const newMenu = new MenuSchema({
        ruta:ruta,
        icono:icono,
        titulo:titulo,
        submenu:submenu
    })
    await newMenu.save()
    res.json({message:'Correcto'})
}



module.exports = menu