const express = require('express')
const usersController = require('../controllers/userController')
// const auths = require("../middleware/auths");
const router = express.Router()

router.get('/', usersController.list)

router.get('/:id', usersController.show)

router.post('/', usersController.create)

// router.post('/', auths.checkJWT, usersController.create)

router.put('/:id', usersController.update)

router.delete('/:id', usersController.remove)

module.exports = router