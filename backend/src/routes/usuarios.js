const {Router} = require('express')
const router = Router()

const {getUsuarios,createUsuario}=require('../controllers/usuario.controller')

router.route('/')
    .get(getUsuarios)
    .post(createUsuario)
/*router.route('/:id/:dia')
    .get(getChecada)
    .put(updateChecada)
*/
module.exports = router