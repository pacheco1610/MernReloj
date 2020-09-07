const {Router} = require('express')
const router = Router()

const {getChecada,createChecada}=require('../controllers/checada.controller')

router.route('/')
    .get(getChecada)
    .post(createChecada)


module.exports = router