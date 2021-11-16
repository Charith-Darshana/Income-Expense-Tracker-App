const express = require ('express')
const expenseController = require('../controllers/ExpenseController');

const router = express.Router();

router.post('/postExpense', expenseController.saveExpense)

router.get('/getExpense',expenseController.getALlExpense)

module.exports = router