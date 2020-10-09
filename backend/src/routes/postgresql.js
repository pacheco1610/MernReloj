const {Router} = require('express')
const router = Router()

const {getUsuarios}=require('../controllers/postgres.controller')

router.route('/')
    .get(getUsuarios)
module.exports = router