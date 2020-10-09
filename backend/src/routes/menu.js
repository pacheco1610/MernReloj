const {Router} = require('express')
const router = Router()

const {getMenu,createMenu}=require('../controllers/menu.controller')

router.route('/')
    .get(getMenu)
    .post(createMenu)
/*router.route('/:id/:dia')
    .get(getChecada)
    .put(updateChecada)
*/
module.exports = router