let express = require('express')
let router = express.Router();

let articlesController = require('../controllers/articlesController')

router.get('/fatherhood', articlesController.list)




module.exports = router;