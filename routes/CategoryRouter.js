const express = require ('express')
const categoryController = require('../controllers/CategoryController');

const router = express.Router();

 router.post('/postCategory', categoryController.saveCategory)

router.get('/getCategory', categoryController.getAllCategory)

module.exports = router;