const express = require('express')
const usersController = require('../controllers/authController')
const auths = require("../middleware/auths");
const router = express.Router()

router.get('/', quotesController.getAllQuotes)

router.get('/:id', quotesController.getQuoteById)

router.post('/', auths.checkJWT, quotesController.createQuote)

router.put('/:id', quotesController.updateQuoteById)

router.delete('/:first_name', auths.checkJWT, quotesController.deleteQuoteByFirstName)

module.exports = router