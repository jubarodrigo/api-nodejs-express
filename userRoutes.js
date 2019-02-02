var express = require('express')
var router = express.Router()

router.all('*', (req, res, next) => {
    next()
})

router.get('/', (req, res) => {
    res.json({ resposta: 'Api de Usuarios' })
})

module.exports = router