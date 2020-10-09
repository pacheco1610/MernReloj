const {Router} = require('express')
const router = Router()

const {getChecadas,createChecada,getChecada,updateChecada}=require('../controllers/checada.controller')

router.route('/')
    .get(getChecadas)
    .post(createChecada)
router.route('/:id/:dia')
    .get(getChecada)
    .put(updateChecada)

module.exports = router