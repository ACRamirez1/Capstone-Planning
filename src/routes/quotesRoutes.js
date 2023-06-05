const express = require('express')
const quotesController = require('../controllers/quotesController')
// const auths = require("../middleware/auths");
const router = express.Router()

router.get('/', quotesController.list)

router.get('/:id', quotesController.show)

router.post('/', quotesController.create)

// router.post('/', auths.checkJWT, quotesController.create)

router.put('/:id', quotesController.update)

router.delete('/:id', quotesController.remove)

// router.delete('/:id', auths.checkJWT, quotesController.remove)

module.exports = router