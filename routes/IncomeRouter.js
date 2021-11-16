const express = require('express');
const incomeController = require ('../controllers/IncomeController');

const router = express.Router();

router.post('/postIncome',incomeController.saveIncome);

router.get('/getIncome',incomeController.getAllIncome);


module.exports = router;